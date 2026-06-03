import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/" aria-label="Borikí Apps Home">
          <Image
            className="brand-mark"
            src={site.logo}
            alt="Borikí logo"
            width={108}
            height={108}
            priority
          />
          <span className="brand-text">
            <span className="brand-name">BorikíPR</span>
            <span className="brand-subtitle">Software • Productos • Futuro</span>
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
