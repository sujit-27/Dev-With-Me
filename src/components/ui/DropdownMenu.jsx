import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function CustomDropdown({ trigger, items }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-gray-900 text-white rounded-md shadow-lg py-2">
        {items.map((item, idx) => (
          <DropdownMenu.Item key={idx} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            {item}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
