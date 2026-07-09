import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    href: string;
  };

const styles: Record<Variant, string> = {
  primary:
    "bg-cyan-400 text-slate-950 shadow-[0_0_0_1px_rgba(0,245,255,0.2),0_0_30px_rgba(0,245,255,0.15)] hover:bg-cyan-300",
  secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-white/75 hover:bg-white/5 hover:text-white",
  outline: "border border-cyan-400/35 text-cyan-100 hover:bg-cyan-400/10",
};

const sharedClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export function Button(props: ButtonProps | LinkProps) {
  if ("href" in props) {
    const { href, variant = "primary", className, children, ...anchorProps } = props;
    const classes = cn(sharedClasses, styles[variant], className);

    return (
      <Link className={classes} href={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { variant = "primary", className, children, ...buttonProps } = props;
  const classes = cn(sharedClasses, styles[variant], className);

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
