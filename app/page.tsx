import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";
import { crm, site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="main">
      <div className="shell">
        <section className="hero">
          <div>
            <span className="kicker">Portal de aplicaciones Borikí</span>
            <h1>Software, proyectos y lo que viene.</h1>
            <p className="subtitle">
              Creamos soluciones digitales con enfoque profesional: estables,
              claras y listas para crecer. Hoy empezamos con una base sólida.
              Mañana, con productos que se ganen su lugar.
            </p>
            <div className="cta-row">
              <Link className="button button-primary" href="/crm">
                Explorar CRM
              </Link>
              <Link className="button" href="/about">
                Conoce Borikí
              </Link>
              <Link className="button" href="/contact">
                Contacto
              </Link>
            </div>
          </div>
          <div className="hero-logo-panel" aria-label="Borikí">
            <Image
              className="hero-logo"
              src={site.logo}
              alt="Borikí logo grande"
              width={520}
              height={520}
              priority
            />
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Proyectos</p>
              <h2 className="section-title">Aplicaciones actuales y futuras</h2>
            </div>
            <p className="small">
              Este sitio irá creciendo con cada release: simple, sólido y
              profesional.
            </p>
          </div>
          <div className="grid">
            <FeatureCard
              title="CRM Borikí"
              badge={`Próximamente: CRM v${crm.version}`}
            >
              <p>
                En desarrollo. Enfocado en orden, seguimiento y productividad
                para negocios.
              </p>
              <div className="cta-row">
                <Link className="button" href="/crm">
                  Ver producto
                </Link>
              </div>
            </FeatureCard>
            <FeatureCard
              title="Próximos lanzamientos"
              badge="Roadmap en construcción"
            >
              <p>
                Herramientas, utilidades y proyectos propios. Publicaremos aquí
                cada versión.
              </p>
            </FeatureCard>
          </div>
        </section>
      </div>
    </main>
  );
}
