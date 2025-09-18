import { ComponentProps } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "contained" | "outlined";
  color?: "primary" | "gray";
}

export function Button({
  variant = "contained",
  color = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-3 py-2 min-w-fit text-base font-bold border border-brand-primary rounded-sm outline-0 transition-all cursor-pointer hover:brightness-90 focus:ring-2 disabled:bg-brand-gray disabled:border-brand-gray disabled:cursor-not-allowed",
        {
          "bg-brand-primary text-white focus:ring-brand-primary/50":
            variant === "contained" && color === "primary",
          "bg-brand-gray text-white focus:ring-brand-gray/50":
            variant === "contained" && color === "gray",
          "border-brand-primary text-brand-primary focus:ring-brand-primary/50":
            variant === "outlined" && color === "primary",
          "border-brand-gray text-foreground-primary focus:ring-brand-gray/50":
            variant === "outlined" && color === "gray",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, children, ...props }: IconButtonProps) {
  return (
    <button
      className={clsx(
        "size-8 flex items-center justify-center transition-all outline-0 rounded-full group cursor-pointer hover:brightness-90 focus:bg-brand-primary focus:ring-2 focus:ring-brand-primary/50 [&>svg]:stroke-brand-primary [&>svg]:group-focus:stroke-white [&>svg]:transition-colors [&>svg]:size-6",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
