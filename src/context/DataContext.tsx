// React
import React, { useContext, useState } from "react";

// Types
import { DataType } from "./DataContext.types";

// Context constants
export const DataContext = React.createContext<any>(undefined);
export const UpdatedDataContext = React.createContext<(arg0: DataType) => {} | void>(() => {});

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

  function updateData(updatedDataData: DataType) {
    const updatedData = {
      ...data,
      ...updatedDataData
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
