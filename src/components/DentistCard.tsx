type Props = {
  dentist: {
    name: string;
    address: string | null;
    phone: string | null;
    website: string | null;
    hours: string | null;
    specialty: string | null;
  };
  index: number;
};

export default function DentistCard({ dentist, index }: Props) {
  return (
    <div
      className="dentist-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="dentist-card__header">
        <div className="dentist-card__avatar">
          {dentist.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="dentist-card__name">{dentist.name}</h3>
          {dentist.specialty && (
            <span className="dentist-card__specialty">{dentist.specialty}</span>
          )}
        </div>
      </div>

      <div className="dentist-card__details">
        {dentist.address && (
          <div className="dentist-card__row">
            <i className="ti ti-map-pin" aria-hidden="true" />
            <span>{dentist.address}</span>
          </div>
        )}
        {dentist.phone && (
          <div className="dentist-card__row">
            <i className="ti ti-phone" aria-hidden="true" />
            <a href={`tel:${dentist.phone}`}>{dentist.phone}</a>
          </div>
        )}
        {dentist.hours && (
          <div className="dentist-card__row">
            <i className="ti ti-clock" aria-hidden="true" />
            <span>{dentist.hours}</span>
          </div>
        )}
      </div>

      <div className="dentist-card__actions">
        {dentist.phone && (
          <a href={`tel:${dentist.phone}`} className="btn btn--primary">
            Call
          </a>
        )}
        {dentist.website && (
          <a
            href={dentist.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
}
