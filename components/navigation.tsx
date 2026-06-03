"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav-links" aria-label="Principal">
      {navigation.map((item) => {
        const basePath = item.href.split("#")[0];
        const active =
          item.href === "/" ? pathname === "/" : pathname === basePath;

        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={active ? "nav-link active" : "nav-link"}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
