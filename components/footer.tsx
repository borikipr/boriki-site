import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          © {new Date().getFullYear()} {site.company}
        </div>
        <div>
          <span className="powered">Powered by Borikí</span>
          <span className="small"> · Hecho con calma, pensado para durar.</span>
        </div>
      </div>
    </footer>
  );
}
