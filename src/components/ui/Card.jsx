export function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-800 rounded-xl shadow-lg p-4 hover:scale-[1.02] transition-transform ${className}`}>
      {children}
    </div>
  );
}
