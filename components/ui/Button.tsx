import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-red text-paper hover:bg-red-bright rounded-sm",
  secondary:
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper/5 rounded-sm",
  tertiary:
    "text-paper underline underline-offset-4 decoration-paper/40 hover:decoration-paper",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
  } = props;

  const classes = `${base} ${variants[variant]} ${
    variant !== "tertiary" ? sizes[size] : ""
  } ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={classes}
      >
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
      {icon}
    </button>
  );
}
