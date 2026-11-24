import type { HTMLAttributes } from "react";
type BadgeProp = HTMLAttributes<HTMLSpanElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const Badge = ({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  ...prop
}: BadgeProp) => {
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-5 py-3",
  };
  const variants = {
    primary: "bg-violet-100 text-violet-600 hover:bg-violet-200",
    secondary: "border border-slate-300 text-violet-600 hover:border-slate-100",
  };

  return (
    <>
      <span
        className={`rounded-xl font-medium ${variants[variant]} ${sizes[size]}`}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
