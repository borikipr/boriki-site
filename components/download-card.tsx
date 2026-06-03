import Link from "next/link";

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
          <span className="kicker">Producto actual</span>
          <h3>{title}</h3>
        </div>
        <span className="meta-pill">
          <span className="status-dot" aria-hidden="true" /> v{version}
        </span>
      </div>
      <p>
        Descarga oficial preparada para la versión actual. Esta sección queda lista
        para publicar nuevos instaladores, notas y requisitos en futuras versiones.
      </p>
      <div className="download-meta">
        <span className="meta-pill">{status}</span>
        <span className="meta-pill">{platform}</span>
        <span className="meta-pill">{trial}</span>
      </div>
      <div className="cta-row">
        <Link className="button button-primary" href={downloadUrl}>
          Descargar v{version}
        </Link>
        <Link className="button" href="#release-notes">
          Ver notas
        </Link>
      </div>
    </article>
  );
}
