import * as RadixTooltip from "@radix-ui/react-tooltip";

// Export a provider to wrap your app
export function TooltipProvider({ children }) {
  return <RadixTooltip.Provider>{children}</RadixTooltip.Provider>;
}

// Optional: a reusable Tooltip component
export function Tooltip({ content, children }) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Content
        className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm shadow-lg"
      >
        {content}
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  );
}
