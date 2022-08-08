// Context
// import { DataType } from "@context/DataContext.types";
// import { useData, useDataUpdate } from "@context/DataContext";

// Mantine
// import { Button } from "@mantine/core";

// Molecules
import HeaderItem from "@molecules/HeaderItem";

export default function Header() {
  // const data = useData();
  // const updateItem = useDataUpdate();

  return (
    <>
      <HeaderItem />
      {/* <h1 className="text-3xl font-bold underline">Header</h1>
      {data.map((data: DataType) => (
        <Button
          onClick={() => updateItem({ label: "Hungry" }, data.id)}
          key={data.id}
        >
          Label: {data.label} | id: {data.id}
        </Button>
      ))} */}
    </>
  );
}
