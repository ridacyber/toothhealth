'use client';
import { useEffect, useState } from 'react';
import DentistCard from './DentistCard';

type Dentist = {
  id: string;
  name: string;
  address: string | null;
  phone: string | null;
  website: string | null;
  hours: string | null;
  specialty: string | null;
  lat: number | null;
  lng: number | null;
};

export default function DentistSearch() {
  const [dentists, setDentists] = useState<Dentist[]>([]);
  const [status, setStatus] = useState<'idle' | 'locating' | 'loading' | 'done' | 'error' | 'denied'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('error');
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setStatus('locating');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setStatus('loading');
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch(`/api/dentists?lat=${latitude}&lng=${longitude}&radius=5000`);
          const data = await res.json();

          if (!res.ok) throw new Error(data.error ?? 'Failed to load dentists');
          setDentists(data.dentists ?? []);
          setStatus('done');
        } catch (err: any) {
          setError(err.message);
          setStatus('error');
        }
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) setStatus('denied');
        else { setStatus('error'); setError(err.message); }
      },
      { timeout: 10000, maximumAge: 300000 }
    );
  }, []);

  if (status === 'locating') return (
    <div className="dentist-status">
      <p>Finding your location...</p>
    </div>
  );

  if (status === 'loading') return (
    <div className="dentist-status">
      <p>Finding dentists near you...</p>
    </div>
  );

  if (status === 'denied') return (
    <div className="dentist-status denied">
      <p>Location access was denied. Please enable location in your browser settings to find nearby dentists.</p>
    </div>
  );

  if (status === 'error') return (
    <div className="dentist-status error">
      <p>Could not load dentists: {error}</p>
    </div>
  );

  if (status === 'done' && dentists.length === 0) return (
    <div className="dentist-status">
      <p>No dental clinics found within 5km of your location. Try searching a nearby city.</p>
    </div>
  );

  return (
    <div className="dentist-grid">
      {dentists.map((d, i) => (
        <DentistCard key={d.id} dentist={d} index={i} />
      ))}
    </div>
  );
}
