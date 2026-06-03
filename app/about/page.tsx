import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";

export const metadata: Metadata = {
  title: "Sobre Borikí",
  description: "Sobre BorikíPR: origen, propósito y visión de productos.",
  openGraph: {
    title: "Sobre Borikí | Borikí Apps",
    description: "Origen, propósito y visión de BorikíPR como marca de software.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="main">
      <div className="shell">
        <section className="hero hero-centered">
          <div>
            <span className="kicker">Sobre Borikí</span>
            <h1 className="page-title">Productos propios con identidad clara.</h1>
            <p className="subtitle">
              BorikíPR nace de una idea simple: construir herramientas digitales
              con calidad real, presencia de marca y una base sólida para crecer.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="grid">
            <FeatureCard title="El nombre">
              <p>
                “Borikí” es un guiño a nuestra identidad y a Puerto Rico. El
                coquí representa presencia: pequeño, firme e imposible de
                ignorar. El dorado representa el estándar: hacerlo bien.
              </p>
            </FeatureCard>
            <FeatureCard title="Quiénes somos">
              <p>
                Un proyecto independiente enfocado en desarrollo de software.
                Diseñamos con mentalidad de producto: orden, estabilidad y
                crecimiento sin atajos.
              </p>
            </FeatureCard>
            <FeatureCard title="Qué hacemos">
              <p>
                Creamos herramientas y soluciones digitales. Empezamos con
                Borikí CRM y expandiremos el portal a productos que resuelvan
                necesidades reales.
              </p>
            </FeatureCard>
            <FeatureCard title="Hacia dónde vamos">
              <p>
                Construiremos un ecosistema de aplicaciones, documentación,
                descargas y soporte. La meta es clara: calidad, utilidad y
                evolución constante.
              </p>
            </FeatureCard>
          </div>
          <div className="cta-row">
            <Link className="button button-primary" href="/crm">
              Ver Borikí CRM
            </Link>
            <Link className="button" href="/contact">
              Contactar
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
