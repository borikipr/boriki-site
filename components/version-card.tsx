type VersionCardProps = {
  version: string;
  date: string;
  status: string;
  notes: string[];
};

export function VersionCard({ version, date, status, notes }: VersionCardProps) {
  return (
    <article className="card version-card">
      <div className="version-row">
        <div>
          <h3>v{version}</h3>
          <p>{date}</p>
        </div>
        <span className="meta-pill">{status}</span>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </article>
  );
}
