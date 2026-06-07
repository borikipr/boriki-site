import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main">
      <div className="shell">
        <section className="hero hero-centered">
          <div>
            <span className="kicker">404</span>
            <h1 className="page-title">Página no encontrada</h1>
            <p className="subtitle">
              La página solicitada no existe en el portal de aplicaciones
              Borikí.
            </p>
            <div className="cta-row">
              <Link className="button button-primary" href="/">
                Volver al Inicio
              </Link>
              <Link className="button" href="/crm">
                Ver CRM
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
