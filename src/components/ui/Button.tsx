import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "danger";
}

export default function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const variantClass = variant === "danger" ? "decline-btn" : "accept-btn";
  return (
    <button className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
