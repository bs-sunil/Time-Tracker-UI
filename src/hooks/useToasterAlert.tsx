import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useSnackAlert = () => {
  const { setToaster } = useContext(AppContext);

  const showSnackbar = (
    type: "success" | "error" | "info" | "warning",

    text: string
  ) => {
    setToaster({
      type,

      text,
    });
  };

  return showSnackbar;
};
