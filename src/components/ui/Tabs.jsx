import * as Tabs from "@radix-ui/react-tabs";

export function CustomTabs({ tabs, className = "" }) {
  return (
    <Tabs.Root defaultValue={tabs[0].value} className={`flex flex-col ${className}`}>
      <Tabs.List className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <Tabs.Trigger key={tab.value} value={tab.value} className="px-3 py-1 rounded-md bg-gray-700 text-white data-[state=active]:bg-blue-600 transition">
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value} className="bg-gray-800 p-4 rounded-md">
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
