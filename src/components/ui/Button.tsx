import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-panorama-navy text-white shadow-card hover:bg-[#06368f] focus-visible:outline-panorama-navy dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white",
  secondary:
    "border border-panorama-silver/80 bg-white text-panorama-navy hover:border-panorama-navy hover:bg-[#F8FAFC] focus-visible:outline-panorama-purple dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/40 dark:hover:bg-white/10",
  ghost:
    "text-panorama-navy hover:bg-panorama-navy/5 focus-visible:outline-panorama-purple dark:text-white/70 dark:hover:bg-white/5",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

function isLinkButtonProps(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (isLinkButtonProps(props)) {
    const {
      href,
      children: _linkChildren,
      className: _linkClassName,
      variant: _linkVariant,
      ...linkProps
    } = props;
    void _linkChildren;
    void _linkClassName;
    void _linkVariant;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    children: _buttonChildren,
    className: _buttonClassName,
    variant: _buttonVariant,
    type = "button",
    ...buttonProps
  } = props;
  void _buttonChildren;
  void _buttonClassName;
  void _buttonVariant;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
