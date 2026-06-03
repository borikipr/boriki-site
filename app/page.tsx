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
            <span className="kicker">Portal oficial de aplicaciones Borikí</span>
            <h1>Software con estrategia, intención y presencia.</h1>
            <p className="subtitle">
              Un portal dedicado a productos Borikí: descargas oficiales,
              versiones, notas de lanzamiento y herramientas creadas para
              trabajar con más claridad desde el primer día.
            </p>
            <div className="cta-row">
              <Link className="button button-primary" href="/crm">
                Ver Borikí CRM
              </Link>
              <Link className="button" href="/crm#changelog">
                Changelog
              </Link>
              <Link className="button" href="/contact">
                Contacto
              </Link>
            </div>
          </div>
          <div className="hero-logo-panel" aria-label="Borikí Apps">
            <Image
              className="hero-logo"
              src={site.logo}
              alt="Logo Borikí"
              width={520}
              height={520}
              priority
            />
          </div>
        </section>

        <section className="stats-grid" aria-label="Resumen del portal">
          <article className="stat-card">
            <strong>v{crm.version}</strong>
            <span>CRM actual</span>
          </article>
          <article className="stat-card">
            <strong>30 días</strong>
            <span>Prueba gratuita</span>
          </article>
          <article className="stat-card">
            <strong>Windows</strong>
            <span>10 / 11</span>
          </article>
          <article className="stat-card">
            <strong>Local</strong>
            <span>Product Key por equipo</span>
          </article>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Por qué Borikí Apps</p>
              <h2 className="section-title">
                Software presentado con claridad. Operación pensada para durar.
              </h2>
            </div>
            <p className="small">
              Una experiencia premium: información directa, decisiones fáciles y
              una base preparada para crecer con futuras aplicaciones.
            </p>
          </div>
          <div className="grid">
            <FeatureCard
              title="Borikí CRM"
              badge={`Versión actual v${crm.version}`}
            >
              <p>
                CRM de escritorio para organizar clientes, contactos,
                actividades, etapas, seguimiento y operación diaria.
              </p>
              <div className="cta-row">
                <Link className="button button-primary" href="/crm">
                  Explorar CRM
                </Link>
              </div>
            </FeatureCard>
            <FeatureCard title="Distribución lista" badge="Descarga oficial">
              <p>
                La página de CRM separa descarga, requisitos, notas de versión,
                changelog, preguntas frecuentes y soporte para manejar versiones
                futuras sin rehacer el portal.
              </p>
            </FeatureCard>
            <FeatureCard title="Soporte y licencias" badge={site.email}>
              <p>
                El canal oficial para preguntas, compra de Product Key,
                colaboración y soporte es email.
              </p>
            </FeatureCard>
            <FeatureCard title="Próximas aplicaciones" badge="Roadmap">
              <p>
                El portal queda listo para publicar nuevas herramientas y
                productos propios bajo la marca Borikí.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section">
          <div className="editorial-band">
            <div>
              <p className="eyebrow">Producto actual</p>
              <h2 className="section-title">
                Borikí CRM: orden para cada seguimiento.
              </h2>
            </div>
            <p>
              Clientes, contactos, próximas acciones, actividades y etapas en
              una aplicación local para Windows. El portal mantiene la descarga,
              el changelog y las notas de versión en un solo lugar.
            </p>
            <Link className="button button-primary" href="/crm">
              Entrar al CRM
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
