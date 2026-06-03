import Link from "next/link";
import { crm, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <strong>Borikí Apps</strong>
          <p className="small">CRM Powered by Borikí • v{crm.version}</p>
          <p className="small">© {new Date().getFullYear()} {site.company}</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/crm">CRM</Link>
          <Link href="/crm#changelog">Changelog</Link>
          <Link href="/crm#faq">Preguntas</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
