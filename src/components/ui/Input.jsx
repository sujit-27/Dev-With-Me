export function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-3 py-2 rounded-md 
                  bg-white dark:bg-gray-900 
                  border border-gray-300 dark:border-gray-700 
                  text-gray-900 dark:text-white 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  transition
                  ${className}`}
      {...props}
    />
  );
}
