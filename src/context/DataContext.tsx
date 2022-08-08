// React
import React, { useContext, useState } from "react";

// Types
import { DataType, EditableItemDataType, ItemType } from "./DataContext.types";

// Context constants
export const DataContext = React.createContext<any>(undefined);
export const UpdatedDataContext = React.createContext<any>(() => {});

// Custom Hooks
export function useData(): DataType {
  return useContext(DataContext);
}
export function useDataUpdate() {
  return useContext(UpdatedDataContext);
}

// Data
import { Database } from "./DataContext.data";

// Custom Provider
export const DataContextProvider = ({ children }: any) => {
  const [data, setData] = useState<DataType>(Database);

  function updateData(updatedDataData: EditableItemDataType, id: number) {
    const updatedData = {
      ...data,
      items: data.items.map((item: ItemType) => {
        if (item.id === id) {
          return {
            ...item,
            editableItemData: { ...item.editableItemData, ...updatedDataData },
          };
        }
        return item;
      }),
    };
    setData(updatedData);
  }

  return (
    <DataContext.Provider value={data}>
      <UpdatedDataContext.Provider value={updateData}>
        {children}
      </UpdatedDataContext.Provider>
    </DataContext.Provider>
  );
};
