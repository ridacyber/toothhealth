import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const radius = searchParams.get('radius') ?? '5000';

  if (!lat || !lng) {
    return NextResponse.json({ error: 'lat and lng are required' }, { status: 400 });
  }

  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="dentist"](around:${radius},${lat},${lng});
      way["amenity"="dentist"](around:${radius},${lat},${lng});
      relation["amenity"="dentist"](around:${radius},${lat},${lng});
    );
    out body;
    >;
    out skel qt;
  `;

  try {
    const res = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: query,
      headers: { 'Content-Type': 'text/plain' },
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error('[Overpass]', res.status, txt);
      return NextResponse.json({ error: 'Overpass API failed' }, { status: 502 });
    }

    const data = await res.json();

    const dentists = (data.elements ?? [])
      .filter((el: any) => el.tags?.name)
      .map((el: any) => ({
        id: String(el.id),
        name: el.tags.name,
        specialty: el.tags['healthcare:speciality'] ?? el.tags.specialty ?? null,
        address: [
          el.tags['addr:housenumber'],
          el.tags['addr:street'],
          el.tags['addr:city'] ?? el.tags['addr:suburb'],
          el.tags['addr:state']
        ].filter(Boolean).join(' ') || null,
        phone: el.tags.phone
          ?? el.tags['contact:phone']
          ?? el.tags['phone:mobile']
          ?? null,
        website: el.tags.website ?? el.tags['contact:website'] ?? null,
        hours: el.tags['opening_hours'] ?? null,
        wheelchair: el.tags.wheelchair ?? null,
        lat: el.lat ?? el.center?.lat ?? null,
        lng: el.lon ?? el.center?.lon ?? null,
      }))
      .filter((d: any) => d.address || d.phone)
      .slice(0, 10);

    return NextResponse.json({ dentists });

  } catch (err: any) {
    console.error('[/api/dentists]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
