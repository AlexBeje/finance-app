// Context
import { useItems, useItemUpdate } from "@context/ItemsContext";

// Mantine
import { Button } from "@mantine/core";

export default function Header() {
  const items = useItems();
  const updateItem = useItemUpdate();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Header</h1>
      {items.map((item) => (
        <Button onClick={() => updateItem({ label: "Hungry" }, item.id)}>
          Label: {item.label} | id: {item.id}
        </Button>
      ))}
    </>
  );
}
