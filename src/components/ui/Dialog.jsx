import * as Dialog from "@radix-ui/react-dialog";

export function CustomDialog({ trigger, children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
        {children}
      </Dialog.Content>
    </Dialog.Root>
  );
}
