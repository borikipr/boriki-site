import type { Metadata } from "next";
import Link from "next/link";
import { DownloadCard } from "@/components/download-card";
import { FeatureCard } from "@/components/feature-card";
import { ScreenshotCard } from "@/components/screenshot-card";
import { VersionCard } from "@/components/version-card";
import { crm, productKeyMailto } from "@/lib/site";

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
              organizar clientes, contactos, actividades y etapas del proceso
              sin complicar la operación diaria.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href={crm.downloadUrl} download>
                Descargar Versión {crm.version}
              </a>
              <Link className="button" href={productKeyMailto}>
                Comprar Product Key
              </Link>
            </div>
          </div>

          <aside className="release-panel" aria-label="Resumen de Borikí CRM">
            <span className="meta-pill">
              <span className="status-dot" aria-hidden="true" /> {crm.status}
            </span>
            <h2>{crm.name}</h2>
            <p>
              Instalador oficial, requisitos de sistema y notas de lanzamiento.
            </p>
            <div className="release-list">
              <span>{crm.platform}</span>
              <span>{crm.trial}</span>
              <span>{crm.license}</span>
            </div>
          </aside>
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
              <p className="eyebrow">Flujo de trabajo</p>
              <h2 className="section-title">Instala, prueba y activa cuando estés listo.</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="1. Obtención" badge="Instalador">
              <p>
                Descarga el instalador oficial directamente desde este portal
                para comenzar.
              </p>
            </FeatureCard>
            <FeatureCard title="2. Despliegue" badge="Windows">
              <p>
                Ejecuta el asistente en tu equipo y completa la instalación en
                pocos pasos.
              </p>
            </FeatureCard>
            <FeatureCard title="3. Evaluación" badge="30 días">
              <p>
                Utiliza todas las funciones del CRM durante el periodo de prueba
                sin compromiso.
              </p>
            </FeatureCard>
            <FeatureCard title="4. Continuidad" badge="Product Key">
              <p>
                Adquiere tu clave de activación para mantener tu base de datos y
                operación activa.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Capacidades</p>
              <h2 className="section-title">
                Diseñado para la gestión diaria.
              </h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="Centralización" badge="Clientes">
              <p>
                Fichas completas con teléfonos, correos electrónicos y estados
                personalizados.
              </p>
            </FeatureCard>
            <FeatureCard title="Seguimiento" badge="Actividades">
              <p>
                Registro de acciones, historial detallado y planificación de
                próximas tareas.
              </p>
            </FeatureCard>
            <FeatureCard title="Identidad" badge="Branding">
              <p>
                Soporte visual de marca de compañía integrado en la presentación
                del producto.
              </p>
            </FeatureCard>
            <FeatureCard title="Estabilidad" badge="Local">
              <p>
                Software de escritorio optimizado para Windows con enfoque en
                rendimiento y privacidad.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section" id="screenshots">
          <div className="section-header">
            <div>
              <p className="eyebrow">Interfaz</p>
              <h2 className="section-title">
                Una experiencia visual profesional.
              </h2>
            </div>
            <p className="small">
              Espacios preparados para capturas oficiales del producto.
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
              <p className="eyebrow">Historial</p>
              <h2 className="section-title">Evolución del producto.</h2>
            </div>
          </div>
          <div className="grid">
            <VersionCard
              version={crm.version}
              date="Lanzamiento actual"
              status="Disponible"
              notes={[
                "Modernización de la interfaz visual.",
                "Optimización del panel de control principal.",
                "Integración de soporte para branding de compañía.",
                "Mejoras en la lógica de gestión de contactos.",
                "Ajustes de estabilidad y rendimiento general.",
              ]}
            />
            <VersionCard
              version="Próximas versiones"
              date="Plan de desarrollo"
              status="En camino"
              notes={[
                "Documentación técnica de instalación.",
                "Registro de cambios detallado por módulo.",
                "Centro de soporte estructurado.",
                "Mejoras en la distribución de actualizaciones.",
              ]}
            />
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-header">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 className="section-title">Respuestas rápidas.</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="¿Es una aplicación web?">
              <p>
                No. Es software de escritorio local para Windows, lo que asegura
                rapidez y control de tus datos.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Cómo se activa?">
              <p>
                Mediante un Product Key que puedes adquirir contactando a
                nuestro equipo de soporte.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Puedo probarlo antes?">
              <p>
                Sí, ofrecemos 30 días de prueba con acceso a todas las funciones
                principales del sistema.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Qué requisitos tiene?">
              <p>
                Está diseñado para funcionar en equipos con Windows 10 o Windows
                11.
              </p>
            </FeatureCard>
          </div>
          <div className="cta-row">
            <Link className="button" href="/contact">
              Contactar soporte
            </Link>
            <a className="button button-primary" href={crm.downloadUrl} download>
              Descargar Versión {crm.version}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
