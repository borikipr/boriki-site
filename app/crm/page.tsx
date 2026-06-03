import type { Metadata } from "next";
import Link from "next/link";
import { DownloadCard } from "@/components/download-card";
import { FeatureCard } from "@/components/feature-card";
import { VersionCard } from "@/components/version-card";
import { crm, notifyMailto, productKeyMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Borikí CRM",
  description:
    "Borikí CRM: prueba completa por 30 días, activación con Product Key y licencia por equipo.",
  openGraph: {
    title: "Borikí CRM | Borikí Apps",
    description:
      "CRM para clientes, seguimiento, etapas y actividades. Descarga preparada para futuras versiones.",
    url: "/crm",
  },
};

export default function CrmPage() {
  return (
    <main className="main">
      <div className="shell">
        <section className="hero hero-centered">
          <div>
            <span className="kicker">Producto • CRM</span>
            <h1 className="page-title">CRM Borikí</h1>
            <p className="subtitle">
              Un CRM diseñado para trabajar con orden: clientes, seguimiento,
              etapas y actividades. Descárgalo gratis y úsalo completo por{" "}
              <strong>30 días</strong>. Al finalizar la prueba, el sistema se{" "}
              <strong>bloquea</strong> hasta activarlo con un{" "}
              <strong>Product Key</strong>.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href={crm.downloadUrl} download>
                Descargar v{crm.version}
              </a>
              <Link className="button" href={productKeyMailto}>
                Comprar Product Key
              </Link>
              <Link className="button" href="#faq">
                Preguntas
              </Link>
            </div>
          </div>
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
          <div className="grid">
            <FeatureCard
              title="Cómo funciona la licencia"
              badge="Trial 30 días • Bloqueo automático"
            >
              <p>
                <strong>Prueba completa por 30 días.</strong> Al terminar el
                periodo de prueba, el programa queda <strong>bloqueado</strong>{" "}
                y requiere un <strong>Product Key</strong> para continuar.
              </p>
            </FeatureCard>
            <FeatureCard
              title="Enfoque"
              badge="Orden • Productividad • Escalable"
            >
              <p>
                CRM Borikí está pensado para negocios que quieren control sin
                complicarse: seguimiento claro, datos limpios y una experiencia
                directa.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Versión actual</p>
              <h2 className="section-title">Lo que incluye v{crm.version}</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="Clientes & contactos">
              <ul>
                <li>Ficha de cliente</li>
                <li>Teléfonos y emails</li>
                <li>Estados de contacto</li>
                <li>Próxima acción</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Seguimiento & etapas">
              <ul>
                <li>Historial de seguimiento</li>
                <li>Etapas del proceso</li>
                <li>Actividades y tipo de actividad</li>
                <li>Auditoría e historial de cambios</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Seguridad">
              <ul>
                <li>Usuarios y roles Admin / Usuario</li>
                <li>Reset de contraseña</li>
                <li>Cambio de contraseña</li>
                <li>Activación por Product Key</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Base sólida">
              <ul>
                <li>SQL con estructura estable</li>
                <li>Validaciones de email, teléfono y dinero</li>
                <li>Modo vista / editar con UPSERT</li>
                <li>Arquitectura lista para crecer</li>
              </ul>
            </FeatureCard>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Activación</p>
              <h2 className="section-title">Licencia y activación</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard
              title="Licencia por equipo"
              badge="Licencia local • 1 equipo"
            >
              <p>
                CRM Borikí utiliza un sistema de licencia machine-based. Cada
                Product Key activa el sistema en <strong>una sola computadora</strong>.
              </p>
              <ul>
                <li>1 licencia = 1 PC</li>
                <li>Bloqueo automático al finalizar el trial</li>
                <li>Reactivación inmediata con Product Key</li>
                <li>Los datos del cliente se conservan</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Activación" badge="Activación local">
              <p>
                La activación se realiza con Product Key. No requiere conexión
                constante a internet.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Distribución</p>
              <h2 className="section-title">Requisitos e instalación</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="Requisitos" badge="Windows 10 / 11">
              <p>
                Compatible con Windows 10 y Windows 11. El instalador indicará
                cualquier requisito adicional si aplica.
              </p>
            </FeatureCard>
            <FeatureCard title="Instalación">
              <ol>
                <li>Descarga el instalador oficial desde este portal.</li>
                <li>Ejecuta CRM_Setup.exe en la computadora donde se usará.</li>
                <li>Completa el asistente de instalación.</li>
                <li>Usa la prueba de 30 días o activa con Product Key.</li>
              </ol>
            </FeatureCard>
            <FeatureCard title="Soporte" badge="Soporte: borikipr@gmail.com">
              <p>
                Soporte por email. Documentación y portal de soporte se añadirán
                más adelante.
              </p>
            </FeatureCard>
            <FeatureCard title="Preparado para releases futuros">
              <p>
                La página ya separa versión, descarga, notas, requisitos e
                instrucciones para publicar nuevas versiones sin rehacer el sitio.
              </p>
            </FeatureCard>
          </div>
        </section>

        <section className="section" id="release-notes">
          <div className="section-header">
            <div>
              <p className="eyebrow">Release notes</p>
              <h2 className="section-title">Historial de versiones</h2>
            </div>
          </div>
          <div className="grid">
            <VersionCard
              version={crm.version}
              date="Versión actual"
              status="Actual"
              notes={[
                "Clientes, contactos, seguimiento y próximas acciones.",
                "Usuarios y roles Admin / Usuario.",
                "Validaciones de datos e historial de cambios.",
                "Activación local por Product Key con trial de 30 días.",
              ]}
            />
            <VersionCard
              version="Siguiente"
              date="Roadmap"
              status="Planificado"
              notes={[
                "Documentación pública de instalación.",
                "Checksums del instalador.",
                "Historial de cambios descargable.",
                "Canal formal de soporte.",
              ]}
            />
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-header">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 className="section-title">Antes de instalar</h2>
            </div>
          </div>
          <div className="grid">
            <FeatureCard title="¿Puedo descargarlo gratis?">
              <p>
                Sí. La descarga incluye una prueba completa por{" "}
                <strong>30 días</strong>.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Qué pasa cuando termina la prueba?">
              <p>
                El programa se <strong>bloquea</strong> y requiere un Product
                Key para continuar.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Se puede usar en varias computadoras?">
              <p>
                No. La licencia es por computadora. Para usarlo en otro equipo se
                requiere un Product Key adicional.
              </p>
            </FeatureCard>
            <FeatureCard title="¿Pierdo mis datos si no compro de inmediato?">
              <p>
                No. Los datos permanecen guardados y se restauran al activar la
                licencia.
              </p>
            </FeatureCard>
          </div>
          <div className="cta-row">
            <Link className="button" href="/">
              Volver al Home
            </Link>
            <Link className="button button-primary" href={notifyMailto}>
              Notificarme del lanzamiento
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
