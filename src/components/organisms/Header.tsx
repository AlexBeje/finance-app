// Context
import { ItemType } from "@context/DataContext.types";
import { useData, useDataUpdate } from "@context/DataContext";

// Mantine
import { Button } from "@mantine/core";

// Molecules
import HeaderItem from "@molecules/HeaderItem/HeaderItem";
import { HeaderItemTypeEnum } from "@molecules/HeaderItem/HeaderItem.types";

export default function Header() {
  const data = useData();
  const updateItem = useDataUpdate();

  return (
    <>
      <HeaderItem type={HeaderItemTypeEnum.CURRENCY} />
      <h1 className="text-3xl font-bold underline">Header</h1>
      {data.items.map((item: ItemType) => (
        <Button
          onClick={() => updateItem({ label: "Hungry" }, item.id)}
          key={item.id}
        >
          Label: {item.editableItemData.label} | id: {item.id}
        </Button>
      ))}
    </>
  );
}
