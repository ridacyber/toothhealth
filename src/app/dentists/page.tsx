import DentistSearch from '@/components/DentistSearch';

export default function DentistsPage() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-display font-semibold mb-4">Nearby Dentists</h1>
        <p className="text-muted mb-8">Real dental clinics from OpenStreetMap</p>
        <DentistSearch />
      </div>
    </div>
  );
}
