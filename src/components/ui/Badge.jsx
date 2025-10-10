export function Badge({ children, className = "", variant = "default" }) {
  const baseStyles =
    "inline-block px-2 py-1 text-xs font-semibold rounded-full transition-colors duration-300";

  const variants = {
    default: "bg-gray-700 text-white",
    neon: "bg-blue-500 text-white shadow-[0_0_8px_rgba(0,191,255,0.6)]",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
