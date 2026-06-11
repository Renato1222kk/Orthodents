"use client";

import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Texto curto exibido no fallback quando a imagem não carrega */
  fallbackLabel?: string;
};

/**
 * Imagem com fallback visual: caso a URL externa não carregue,
 * renderiza um gradiente azul odontológico com um ícone e rótulo,
 * evitando áreas quebradas/vazias.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  fallbackLabel = "Orthodentes",
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-brand to-brand-dark text-white ${className}`}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
            aria-hidden="true"
          >
            <path d="M12 5.5c-1.8-1.5-4.2-1.7-5.7-.4C4 6.7 4 10 5 13c.6 1.8 1.1 4 1.7 5.5.4 1 1.6 1 2-.1l1-3c.2-.6 1.4-.6 1.6 0l1 3c.4 1.1 1.6 1.1 2 .1.6-1.5 1.1-3.7 1.7-5.5 1-3 1-6.3-1.3-7.9-1.5-1.3-3.9-1.1-5.4.4Z" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wide">
            {fallbackLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
