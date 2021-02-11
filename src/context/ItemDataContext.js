import React, { createContext, useState } from "react";

export const ItemDataContext = createContext();

export const ItemDataProvider = ({ children }) => {
  const [itemList, setItemList] = useState({});

  return (
    <ItemDataContext.Provider
      value={{
        itemList,
        setItemList,
      }}
    >
      {children}
    </ItemDataContext.Provider>
  );
};