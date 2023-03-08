import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import Sibebar from "./components/common/sidebar/sidebar";
import SignIn from "./components/authentication/sign-in/signin";
import reportWebVitals from "./reportWebVitals";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
   <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </Provider>
  // <React.StrictMode>
  //   {/* <Sibebar /> */}
  //   <SignIn />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
