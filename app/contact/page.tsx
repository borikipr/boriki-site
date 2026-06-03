import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";
import { crm, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto y soporte para Borikí Apps.",
  openGraph: {
    title: "Contacto | Borikí Apps",
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
            <span className="kicker">Soporte y contacto</span>
            <h1 className="page-title">Hablemos de Borikí Apps.</h1>
            <p className="subtitle">
              Para soporte, compra de Product Key, preguntas comerciales o
              colaboración, el canal oficial por ahora es email.
            </p>
            <div className="cta-row">
              <Link className="button button-primary" href={`mailto:${site.email}`}>
                Enviar email
              </Link>
              <Link className="button" href="/crm">
                Ver CRM
              </Link>
            </div>
          </div>

          <aside className="release-panel" aria-label="Contacto Borikí Apps">
            <span className="meta-pill">Canal oficial</span>
            <h2>{site.email}</h2>
            <p>
              Incluye tu nombre, empresa, teléfono y el motivo del mensaje para
              poder responder con mejor contexto.
            </p>
            <div className="release-list">
              <span>Soporte de {crm.name}</span>
              <span>Compra de Product Key</span>
              <span>Colaboraciones y negocios</span>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="grid">
            <FeatureCard title="Soporte" badge={site.email}>
              <p>
                Para preguntas técnicas, instalación, activación o uso general
                del CRM, escribe al correo oficial.
              </p>
            </FeatureCard>
            <FeatureCard title="Licencias" badge="Product Key">
              <p>
                Para adquirir una licencia, envía tu información de contacto y
                el equipo donde se usará el CRM.
              </p>
            </FeatureCard>
            <FeatureCard title="Respuesta" badge="Email">
              <p>
                Respondemos tan pronto sea posible. El portal seguirá creciendo
                con documentación y soporte más estructurado.
              </p>
            </FeatureCard>
            <FeatureCard title="Portal" badge="Borikí Apps">
              <p>
                Este espacio está dedicado a aplicaciones Borikí, descargas,
                notas de versión y futuras herramientas.
              </p>
            </FeatureCard>
          </div>
        </section>
      </div>
    </main>
  );
}
