import React from "react";

export const AppContext = React.createContext<{
  toaster: any;

  setToaster: React.Dispatch<React.SetStateAction<any>>;
}>({
  toaster: false,

  setToaster: () => {},
});
