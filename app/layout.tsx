import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://apps.borikipr.com"),
  title: {
    default: "Borikí Apps | Software Portal",
    template: "%s | Borikí Apps",
  },
  description:
    "Portal oficial de aplicaciones Borikí: software, productos, descargas y futuras versiones.",
  openGraph: {
    title: "Borikí Apps",
    description:
      "Portal oficial de aplicaciones Borikí para productos, descargas y futuras versiones.",
    url: "https://apps.borikipr.com",
    siteName: "Borikí Apps",
    images: [
      {
        url: "/assets/logo-boriki.png",
        width: 1200,
        height: 1200,
        alt: "Borikí logo",
      },
    ],
    locale: "es_PR",
    type: "website",
  },
  icons: {
    icon: "/assets/logo-boriki.png",
    apple: "/assets/logo-boriki.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
