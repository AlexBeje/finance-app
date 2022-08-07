// React
import React, { useContext, useState } from "react";

// Types
import { ItemType } from "./itemsContext.types";

// Context constants
export const ItemsContext = React.createContext<any>(undefined);
export const UpdatedItemsContext = React.createContext<any>(() => {});

// Custom Hooks
export function useItems(): ItemType[] {
  return useContext(ItemsContext);
}
export function useItemUpdate() {
  return useContext(UpdatedItemsContext);
}

// Data
import { ItemsContextData } from "./ItemsContext.data";

// Custom Provider
export const ItemsContextProvider = ({ children }: any) => {
  const [items, setItems] = useState<ItemType[]>(ItemsContextData);

  function updateItem(updatedItemData: ItemType, id: number) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, ...updatedItemData };
        }
        return item;
      }),
    );
  }

  return (
    <ItemsContext.Provider value={items}>
      <UpdatedItemsContext.Provider value={updateItem}>
        {children}
      </UpdatedItemsContext.Provider>
    </ItemsContext.Provider>
  );
};
