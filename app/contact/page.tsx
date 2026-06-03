import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacto BorikíPR.",
  openGraph: {
    title: "Contact | Borikí Apps",
    description: "Canal oficial de contacto para BorikíPR.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="main">
      <div className="shell">
        <section className="hero hero-centered">
          <div>
            <span className="kicker">Contacto</span>
            <h1 className="page-title">Hablemos</h1>
            <p className="subtitle">
              Por ahora, el canal oficial es email. Responderemos lo antes
              posible.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="grid">
            <FeatureCard
              title="Email"
              badge="Soporte • Colaboraciones • Negocios"
            >
              <p>
                <Link href={`mailto:${site.email}`}>{site.email}</Link>
              </p>
            </FeatureCard>
            <FeatureCard title="Horario">
              <p>
                Respuestas en cuanto sea posible. Estamos construyendo, pero
                siempre contestamos.
              </p>
            </FeatureCard>
          </div>
          <div className="cta-row">
            <Link className="button" href="/">
              Volver al Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
