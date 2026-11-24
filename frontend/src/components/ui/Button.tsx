import type { ButtonHTMLAttributes } from "react";

type ButtonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  type = "button",
  className = "",
  ...prop
}: ButtonProp) => {
  const variants = {
    primary: "bg-violet-600 hover:bg-violet-700 text-white",
    secondary:
      "border border-slate-300 hover:border-slate-100 bg-white text-violet-600",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <>
      <button
        type={type}
        className={`rounded-xl font-medium transition-colors disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
