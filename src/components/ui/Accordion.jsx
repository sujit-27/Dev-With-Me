import * as Accordion from "@radix-ui/react-accordion";

export function CustomAccordion({ items }) {
  return (
    <Accordion.Root type="multiple" className="space-y-2">
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value} className="bg-gray-800 rounded-md">
          <Accordion.Trigger className="w-full text-left px-4 py-2 hover:bg-gray-700">{item.title}</Accordion.Trigger>
          <Accordion.Content className="px-4 py-2">{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
