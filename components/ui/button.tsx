import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps & ComponentPropsWithoutRef<"button"> & { href?: never };
type ButtonAsLink = BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href">;

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-400 text-slate-950 shadow-glow hover:bg-cyan-300",
  secondary:
    "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
  outline: "border border-cyan-400/40 text-cyan-100 hover:bg-cyan-400/10",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children, ...rest } = props;
  const shared = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-slate-950",
    styles[variant],
    className
  );

  if ("href" in props) {
    const linkProps = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href">;
    return (
      <Link className={shared} href={props.href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={shared} {...rest}>
      {children}
    </button>
  );
}
