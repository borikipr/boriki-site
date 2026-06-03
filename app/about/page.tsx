import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";

export const metadata: Metadata = {
  title: "About",
  description: "Sobre BorikíPR: origen, propósito y visión.",
  openGraph: {
    title: "About | Borikí Apps",
    description: "Origen, propósito y visión de BorikíPR.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="main">
      <div className="shell">
        <section className="hero hero-centered">
          <div>
            <span className="kicker">Sobre nosotros</span>
            <h1 className="page-title">De dónde nace BorikíPR</h1>
            <p className="subtitle">
              BorikíPR nace de una idea simple: construir productos propios con
              calidad real. Con raíces claras y una visión hacia adelante.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="grid">
            <FeatureCard title="El nombre">
              <p>
                “Borikí” es un guiño a nuestra identidad y a Puerto Rico. El
                coquí representa presencia: pequeño, firme e imposible de
                ignorar. El dorado, el estándar: hacerlo bien.
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
                proyectos propios como el CRM Borikí, y expandiremos a productos
                que resuelvan necesidades reales.
              </p>
            </FeatureCard>
            <FeatureCard title="Hacia dónde vamos">
              <p>
                Construiremos un ecosistema: software, utilidades y productos
                listos para usarse y escalar. La meta es clara: calidad, soporte
                y evolución constante.
              </p>
            </FeatureCard>
          </div>
          <div className="cta-row">
            <Link className="button button-primary" href="/contact">
              Contactar
            </Link>
            <Link className="button" href="/">
              Volver al Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
