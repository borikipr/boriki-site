"use client";

import Image from "next/image";
import { useState } from "react";

type ScreenshotCardProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export function ScreenshotCard({
  title,
  description,
  src,
  alt,
}: ScreenshotCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="screenshot-card">
        <button
          className="screenshot-preview"
          onClick={() => setOpen(true)}
          type="button"
          aria-label={`Ver captura: ${title}`}
        >
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1020}
            sizes="(max-width: 820px) 100vw, 25vw"
            loading="lazy"
          />
        </button>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>

      {open ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          <button
            className="lightbox-close"
            onClick={() => setOpen(false)}
            type="button"
            aria-label="Cerrar vista ampliada"
          >
            Cerrar
          </button>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1020}
              sizes="100vw"
            />
            <div className="lightbox-caption">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
