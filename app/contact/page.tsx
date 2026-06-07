import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";
import { crm, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soporte y contacto",
  description: "Contacto y soporte para Borikí Apps.",
  openGraph: {
    title: "Soporte y contacto | Borikí Apps",
    description: "Canal oficial de contacto y soporte para Borikí Apps.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="main">
      <div className="shell">
        <section className="product-hero">
          <div>
            <span className="kicker">Contacto</span>
            <h1 className="page-title">Estamos para ayudarte con Borikí Apps.</h1>
            <p className="subtitle">
              Para soporte técnico, compra de Product Key o preguntas
              comerciales, nuestro canal oficial de atención es el correo
              electrónico.
            </p>
            <div className="cta-row">
              <Link className="button button-primary" href={`mailto:${site.email}`}>
                Enviar mensaje
              </Link>
              <Link className="button" href="/crm">
                Ver Borikí CRM
              </Link>
            </div>
          </div>

          <aside className="release-panel" aria-label="Contacto Borikí Apps">
            <span className="meta-pill">Atención oficial</span>
            <h2>{site.email}</h2>
            <p>
              Por favor, incluye tu nombre y el motivo de tu consulta para
              brindarte una respuesta más ágil.
            </p>
            <div className="release-list">
              <span>Soporte de {crm.name}</span>
              <span>Activación de licencias</span>
              <span>Consultas comerciales</span>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="grid">
            <FeatureCard title="Soporte técnico" badge={site.email}>
              <p>
                Ayuda con la instalación, errores del sistema o dudas sobre el
                uso de nuestras aplicaciones.
              </p>
            </FeatureCard>
            <FeatureCard title="Licencias" badge="Product Key">
              <p>
                Gestión de nuevas claves de producto y soporte para la
                activación de equipos.
              </p>
            </FeatureCard>
            <FeatureCard title="Tiempo de atención" badge="Email">
              <p>
                Revisamos cada mensaje con prioridad para asegurar que tu
                operación no se detenga.
              </p>
            </FeatureCard>
            <FeatureCard title="Marca Borikí" badge="Software">
              <p>
                Un ecosistema de herramientas digitales enfocadas en calidad,
                orden y presencia profesional.
              </p>
            </FeatureCard>
          </div>
        </section>
      </div>
    </main>
  );
}
