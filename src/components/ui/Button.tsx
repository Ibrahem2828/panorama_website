import { LoaderCircle } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
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

function isExternalHref(href: string) {
  return /^(?:https?:|mailto:|tel:)/.test(href);
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, className, isLoading = false, variant = "primary" } = props;
  const classes = cn("button-base", `button-${variant}`, className);
  const content = (
    <>
      {isLoading ? <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-panorama-spin" /> : null}
      {children}
    </>
  );

  if (isLinkButtonProps(props)) {
    const { href, children: _children, className: _className, isLoading: _isLoading, variant: _variant, ...linkProps } = props;
    void _children;
    void _className;
    void _isLoading;
    void _variant;

    if (isExternalHref(href)) {
      return (
        <a aria-busy={isLoading || undefined} aria-disabled={isLoading || undefined} className={classes} href={href} {...linkProps}>
          {content}
        </a>
      );
    }

    return (
      <Link aria-busy={isLoading || undefined} aria-disabled={isLoading || undefined} className={classes} href={href} {...linkProps}>
        {content}
      </Link>
    );
  }

  const { children: _children, className: _className, isLoading: _isLoading, variant: _variant, type = "button", disabled, ...buttonProps } = props;
  void _children;
  void _className;
  void _isLoading;
  void _variant;

  return (
    <button aria-busy={isLoading || undefined} className={classes} disabled={disabled || isLoading} type={type} {...buttonProps}>
      {content}
    </button>
  );
}
