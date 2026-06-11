import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** "dark" para uso sobre fundo claro (padrão), "light" para fundo escuro */
  variant?: "dark" | "light";
  /** Tamanho do tile da logo em px */
  size?: number;
  /** Esconde o texto ao lado (apenas o tile da marca) */
  iconOnly?: boolean;
};

export default function Logo({
  variant = "dark",
  size = 46,
  iconOnly = false,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label="Orthodentes São João del Rei — página inicial"
      className="group inline-flex items-center gap-3"
    >
      <span
        className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-brand shadow-soft ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.04]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/orthodentes.png"
          alt="Logo Orthodentes"
          width={size}
          height={size}
          priority
          className="h-full w-full object-cover"
        />
      </span>

      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={`text-[17px] font-extrabold tracking-tight ${
              isLight ? "text-white" : "text-brand"
            }`}
          >
            Ortho<span className="font-light">dentes</span>
          </span>
          <span
            className={`mt-1 text-[10px] font-medium uppercase tracking-[0.22em] ${
              isLight ? "text-white/60" : "text-ink"
            }`}
          >
            São João del Rei
          </span>
        </span>
      )}
    </Link>
  );
}
