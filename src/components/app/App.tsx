import { useState } from "react";
import { AxiosInterceptor } from "../../config/axios.config";
import { AppContext } from "../../context/AppContext";
import AppRoutes from "../../routes/AppRoutes";
import CustomizedSnackbars from "../utils/Toast";
import "./App.css";

function App() {
  const [toaster, setToaster] = useState(null);

  return (
    <>
      <AppContext.Provider value={{ toaster, setToaster }}>
        <AxiosInterceptor>
          <AppRoutes />
        </AxiosInterceptor>
      </AppContext.Provider>
      {toaster && <CustomizedSnackbars {...{ toaster, setToaster }} />}
    </>
  );
}

export default App;
