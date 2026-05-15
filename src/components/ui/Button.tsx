import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants = {
  primary: "bg-accent-500 text-slate-950 hover:bg-accent-400",
  secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const sharedClassName =
    `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, children: _children, variant: _variant, className: _className, ...rest } = props;
    return (
      <a className={sharedClassName} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { children: _children, variant: _variant, className: _className, ...rest } = props as NativeButtonProps;

  return (
    <button className={sharedClassName} type="button" {...rest}>
      {children}
    </button>
  );
}
