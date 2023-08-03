import React from "react";

//List champ context
export const ListChampContext = React.createContext();

export const useListChampContext = () => {
  return React.useContext(ListChampContext);
};

//Info context
export const InfoChampContext = React.createContext();

export const useInfoChampContext = () => {
  return React.useContext(InfoChampContext);
};
