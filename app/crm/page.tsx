import type { Metadata } from "next";
import Link from "next/link";
import { DownloadCard } from "@/components/download-card";
import { FeatureCard } from "@/components/feature-card";
import { ScreenshotCard } from "@/components/screenshot-card";
import { VersionCard } from "@/components/version-card";
import { crm, productKeyMailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Borikí CRM",
  description:
    "Borikí CRM: gestión de clientes, contactos, seguimiento, actividades, prueba gratuita de 30 días y activación con Product Key.",
  openGraph: {
    title: "Borikí CRM | Borikí Apps",
    description:
      "CRM profesional de escritorio para organizar clientes, actividades y operación diaria.",
    url: "/crm",
  },
};

const screenshots = [
  {
    title: "Dashboard moderno",
    description:
      "Espacio preparado para mostrar la vista principal cuando haya capturas oficiales.",
  },
  {
    title: "Gestión de clientes",
    description:
      "Área para capturas de fichas, contactos, estados y próximas acciones.",
  },
  {
    title: "Seguimiento y actividades",
    description:
      "Preparado para enseñar historial, etapas y registros de actividad.",
  },
  {
    title: "Configuración visual",
    description:
      "Lugar reservado para personalización, branding y ajustes disponibles.",
  },
];

export default function CrmPage() {
  return (
    <main className="main">
      <div className="shell">
        <section className="product-hero">
          <div>
            <span className="kicker">Borikí Apps • Producto CRM</span>
            <h1 className="page-title">
              CRM para seguimiento con orden, claridad y presencia.
            </h1>
            <p className="subtitle">
              Borikí CRM es una aplicación local para Windows creada para
              organizar clientes, contactos, actividades, etapas y seguimiento
              sin complicar la operación diaria. Incluye prueba completa de{" "}
              <strong>30 días</strong> y activación mediante{" "}
              <strong>Product Key</strong>.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href={crm.downloadUrl} download>
                Descargar v{crm.version}
              </a>
              <Link className="button" href={productKeyMailto}>
                Comprar Product Key
              </Link>
              <Link className="button" href="#screenshots">
                Ver vistas
              </Link>
            </div>
          </div>

          <aside className="release-panel" aria-label="Resumen de Borikí CRM">
            <span className="meta-pill">
              <span className="status-dot" aria-hidden="true" /> {crm.status}
            </span>
            <h2>{crm.name} v{crm.version}</h2>
            <p>
              Descarga oficial, requisitos, notas de versión y soporte en un
              solo lugar.
            </p>
            <div className="release-list">
              <span>{crm.platform}</span>
              <span>{crm.trial}</span>
              <span>{crm.license}</span>
            </div>
          </aside>
        </section>

        <section className="stats-grid" aria-label="Resumen del CRM">
          <article className="stat-card">
            <strong>v{crm.version}</strong>
            <span>Versión actual</span>
          </article>
          <article className="stat-card">
            <strong>30 días</strong>
            <span>Prueba gratuita</span>
          </article>
          <article className="stat-card">
            <strong>Windows</strong>
            <span>10 / 11 requerido</span>
          </article>
          <article className="stat-card">
            <strong>Local</strong>
            <span>Activación por Product Key</span>
          </article>
        </section>

        <section className="section">
          <DownloadCard
            title={crm.name}
            version={crm.version}
            status={crm.status}
            downloadUrl={crm.downloadUrl}
            platform={crm.platform}
            trial={crm.trial}
          />
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Instalación</p>
              <h2 className="section-title">Instala, prueba y activa cuando estés listo.</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="1. Descarga" badge="Instalador oficial">
              <p>
                Usa el botón de descarga del portal para obtener el instalador
                actual de Borikí CRM.
              </p>
            </FeatureCard>
            <FeatureCard title="2. Instala" badge={crm.platform}>
              <p>
                Ejecuta el instalador en la computadora donde se usará el CRM y
                completa el asistente de instalación.
              </p>
            </FeatureCard>
            <FeatureCard title="3. Prueba" badge="30 días">
              <p>
                Evalúa el CRM completo durante el periodo de prueba gratuita sin
                limitar la experiencia principal.
              </p>
            </FeatureCard>
            <FeatureCard title="4. Activa" badge="Product Key">
              <p>
                Cuando estés listo, la activación se realiza mediante Product
                Key para continuar usando el sistema.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Información del producto</p>
              <h2 className="section-title">
                Todo lo necesario para instalar, probar y operar.
              </h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="Borikí CRM" badge="Producto actual">
              <p>
                Herramienta CRM para centralizar clientes, contactos,
                seguimiento, actividades y etapas del proceso comercial.
              </p>
            </FeatureCard>
            <FeatureCard title="Versión actual" badge={`v${crm.version}`}>
              <p>
                La versión actual se muestra desde la configuración central del
                portal. No se cambian archivos de descarga ni version.json.
              </p>
            </FeatureCard>
            <FeatureCard title="Prueba gratuita" badge="30 días">
              <p>
                El usuario puede probar el CRM completo por 30 días. Al terminar
                el periodo de prueba, se requiere Product Key para continuar.
              </p>
            </FeatureCard>
            <FeatureCard title="Descarga" badge="Instalador oficial">
              <p>
                El botón de descarga usa la URL existente del instalador y se
                mantiene compatible con Cloudflare y Vercel.
              </p>
            </FeatureCard>
            <FeatureCard title="Funciones" badge="Clientes • Seguimiento">
              <p>
                Incluye fichas de cliente, teléfonos, emails, estados de
                contacto, próximas acciones, actividades e historial.
              </p>
            </FeatureCard>
            <FeatureCard title="Requisitos" badge={crm.platform}>
              <p>
                Requiere Windows 10 o Windows 11. El instalador indicará
                cualquier requisito adicional si aplica.
              </p>
            </FeatureCard>
            <FeatureCard title="Soporte" badge={site.email}>
              <p>
                El soporte, compras de licencia y preguntas comerciales se
                manejan por el email oficial.
              </p>
            </FeatureCard>
            <FeatureCard title="Branding de compañía" badge="Soporte visual">
              <p>
                El producto contempla soporte de marca visual de compañía como
                parte de su presentación y evolución.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section" id="screenshots">
          <div className="section-header">
            <div>
              <p className="eyebrow">Vistas del CRM</p>
              <h2 className="section-title">
                Una presentación visual lista para crecer.
              </h2>
            </div>
            <p className="small">
              Placeholders pulidos hasta que existan capturas oficiales del
              producto. No se usan imágenes falsas.
            </p>
          </div>
          <div className="screenshot-grid">
            {screenshots.map((item) => (
              <ScreenshotCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="section" id="changelog">
          <div className="section-header">
            <div>
              <p className="eyebrow">Changelog</p>
              <h2 className="section-title">Cambios organizados por versión.</h2>
            </div>
          </div>
          <div className="grid">
            <VersionCard
              version={crm.version}
              date="Actual"
              status="Publicado"
              notes={[
                "Modernización visual.",
                "Mejoras del dashboard.",
                "Soporte de branding de compañía.",
                "Mejoras en gestión de clientes y contactos.",
                "Mejoras de estabilidad.",
              ]}
            />
            <VersionCard
              version="Futuras"
              date="Roadmap"
              status="Planificado"
              notes={[
                "Documentación pública de instalación.",
                "Historial de cambios ampliado.",
                "Canal de soporte más estructurado.",
                "Más información de distribución por versión.",
              ]}
            />
          </div>
        </section>

        <section className="section" id="release-notes">
          <div className="section-header">
            <div>
              <p className="eyebrow">Notas de versión</p>
              <h2 className="section-title">Notas de la versión actual</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title={`Borikí CRM v${crm.version}`} className="card-wide">
              <p>
                Esta versión está orientada a operación local en Windows,
                gestión de clientes y contactos, seguimiento de actividades,
                soporte visual de marca de compañía y mejoras generales de
                estabilidad.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-header">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 className="section-title">Respuestas rápidas antes de instalar.</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="¿Qué es Borikí CRM?">
              <p>
                Es una aplicación CRM para organizar clientes, contactos,
                seguimiento, actividades y procesos de negocio.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Es local o en línea?">
              <p>
                Es una aplicación local de escritorio. La activación se realiza
                mediante Product Key.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Requiere Windows?">
              <p>Sí. Está preparado para Windows 10 y Windows 11.</p>
            </FeatureCard>
            <FeatureCard title="¿Tiene prueba gratuita?">
              <p>
                Sí. El CRM incluye prueba completa de 30 días antes de requerir
                activación.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Cómo funcionan las actualizaciones?">
              <p>
                Las futuras versiones se publicarán desde este portal con su
                changelog, notas de versión y descarga correspondiente.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Soporta branding de compañía?">
              <p>
                Sí. El producto contempla soporte de branding visual de compañía
                como parte de su presentación y evolución.
              </p>
            </FeatureCard>
          </div>
          <div className="cta-row">
            <Link className="button" href="/contact">
              Contactar soporte
            </Link>
            <a className="button button-primary" href={crm.downloadUrl} download>
              Descargar v{crm.version}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
