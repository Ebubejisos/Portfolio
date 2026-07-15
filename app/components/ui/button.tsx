import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant =
  | "solid"
  | "outline"
  | "soft"
  | "ghost"
  | "icon"
  | "unstyled";
export type ButtonSize = "small" | "medium" | "large" | "icon";

const baseStyles = [
  "group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2.5 font-[var(--body)] font-bold no-underline",
  "transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out",
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3155ff]/20 focus-visible:ring-offset-2",
  "active:scale-[.98] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200",
].join(" ");

const variants: Record<ButtonVariant, string> = {
  solid:
    "rounded-xl border border-[#3155ff] bg-[#3155ff] !text-white shadow-[0_8px_22px_rgba(49,85,255,.22)] hover:border-[#2345ed] hover:bg-[#2345ed] hover:!text-white hover:shadow-[0_11px_26px_rgba(49,85,255,.28)] group-hover:[&_svg]:translate-x-0.5 group-hover:[&_svg]:-translate-y-0.5",
  outline:
    "rounded-xl border border-[#b9b9c4] bg-transparent text-[#17171b] hover:border-[#3155ff] hover:bg-[#3155ff]/[.035] hover:text-[#2345ed] group-hover:[&_svg]:translate-x-0.5 group-hover:[&_svg]:-translate-y-0.5",
  soft: "rounded-xl border border-[#ddd7ff] bg-[#f1eeff] text-[#5633bd] hover:border-[#8b5cf6] hover:bg-[#e9e3ff] hover:text-[#44249f]",
  ghost:
    "rounded-xl border border-transparent bg-transparent text-[#17171b] hover:bg-[#eeeaff] hover:text-[#3155ff]",
  icon: "rounded-xl border border-transparent bg-[#17171b] text-white shadow-sm hover:bg-[#3155ff] [&_svg]:size-5",
  unstyled: "border-0 bg-transparent p-0 text-inherit shadow-none",
};

const sizes: Record<ButtonSize, string> = {
  small: "min-h-10 px-4 text-sm",
  medium: "min-h-12 px-5 text-[.95rem]",
  large: "min-h-14 px-6 text-base",
  icon: "size-10 p-0",
};

export function buttonClasses(
  variant: ButtonVariant = "solid",
  size: ButtonSize = "medium",
  className?: string,
) {
  return [baseStyles, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "solid",
  size = "medium",
  className,
  children,
  type = "button",
  ...props
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "solid",
  size = "medium",
  className,
  children,
  ...props
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      {children}
    </a>
  );
}
