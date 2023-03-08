import "./runway.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  getQueryStringParameterByName,
  handleError,
  roleWiseUserNavigation,
} from "../../utils/CommonFn";
import { environment } from "../../../environments/environment";
import { useNavigate } from "react-router-dom";
import { useSnackAlert } from "../../../hooks/useToasterAlert";

const Runway = () => {
  const showSnackbar = useSnackAlert();
  const [uniqueId] = useState(
    Math.floor(Math.random() * 0xffffff * 1000000).toString(16)
  );
  const navigate = useNavigate();
  useEffect(() => {
    const receivedCode = getQueryStringParameterByName("code");

    const data = {
      authType: "mscode",
      authKey: receivedCode,
      state: {
        agent_type: "web",
        caller: "web",
        ondemandpage: "/main/dashboard",
        redirect_uri: `${environment.redirectUrl}`,
        scope: `${environment.scopeForSignIn}`,
        uniqueid: uniqueId,
      },
    };
    sessionStorage.setItem("unique_id", uniqueId);
    axios
      .post(`${environment.baseApiURL}auth/v1/signin`, data)
      .then((result) => {
        if (result.data.code === 200) {
          sessionStorage.setItem("access_token", result.data.data.access_token);
          sessionStorage.setItem("exp_timestamp", result.data.data.exp);
          sessionStorage.setItem(
            "refresh_token",
            result.data.data.refresh_token
          );
          const decodedJwtData: any = JSON.parse(
            atob(result.data.data.access_token.split(".")[1])
          );

          sessionStorage.setItem("emp_name", decodedJwtData.emp_name);
          sessionStorage.setItem("roles", decodedJwtData.roles);
          sessionStorage.setItem("UserId", decodedJwtData.sub);

          navigate(roleWiseUserNavigation());
        } else if (result.data.code === 206) {
          showSnackbar("warning", result.data.message);
          navigate("/");
        }
      })
      .catch((error) => {
        navigate(handleError(error));
      });
  }, []);
  return (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Runway;
