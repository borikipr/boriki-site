type DownloadCardProps = {
  title: string;
  version: string;
  status: string;
  downloadUrl: string;
  platform: string;
  trial: string;
};

export function DownloadCard({
  title,
  version,
  status,
  downloadUrl,
  platform,
  trial,
}: DownloadCardProps) {
  return (
    <article className="card card-wide download-card">
      <div className="version-row">
        <div>
          <span className="kicker">Descarga oficial</span>
          <h3>{title}</h3>
        </div>
        <span className="meta-pill">
          <span className="status-dot" aria-hidden="true" /> v{version}
        </span>
      </div>
      <p>
        Instalador actual para Windows. La descarga se mantiene en la ruta
        oficial existente y queda lista para futuras versiones.
      </p>
      <div className="download-meta">
        <span className="meta-pill">{status}</span>
        <span className="meta-pill">{platform}</span>
        <span className="meta-pill">{trial}</span>
      </div>
      <div className="cta-row">
        <a className="button button-primary" href={downloadUrl} download>
          Descargar v{version}
        </a>
        <a className="button" href="#release-notes">
          Ver notas de versión
        </a>
      </div>
    </article>
  );
}
