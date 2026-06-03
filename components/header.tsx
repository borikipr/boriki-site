import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="shell top-strip-inner">
          <span>Borikí Apps · Portal de software</span>
          <span>CRM impulsado por Borikí</span>
        </div>
      </div>
      <div className="shell nav">
        <Link className="brand" href="/" aria-label="Inicio de Borikí Apps">
          <Image
            className="brand-mark"
            src={site.logo}
            alt="Logo Borikí"
            width={108}
            height={108}
            priority
          />
          <span className="brand-text">
            <span className="brand-name">Borikí Apps</span>
            <span className="brand-subtitle">Software • Productos • Futuro</span>
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
