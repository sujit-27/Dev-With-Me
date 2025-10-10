export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg
                 bg-gradient-to-r from-blue-600 to-indigo-700
                 text-white font-medium
                 hover:brightness-110 hover:scale-105
                 transition-all duration-300 shadow-lg
                 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
