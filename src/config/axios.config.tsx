import axios from "axios";
import { environment } from "../environments/environment";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../services/auth.service";
const axiosInstance = axios.create({
  baseURL: environment.baseApiURL,
});

const refreshToken = async () => {
  const unqiueId: any = sessionStorage.getItem("unique_id"),
    savedRefreshToken = sessionStorage.getItem("refresh_token");
  try {
    let result = await axios.post(
      `${environment.baseApiURL}auth/v1/refreshtoken`,
      {
        refreshToken: savedRefreshToken,
        state: {
          agent_type: "web",
          caller: "web",
          ondemandpage: "/main/dashboard",
          redirect_uri: "http://localhost:4200/auth/redirect",
          scope: "offline_access https://graph.microsoft.com/user.read",
          uniqueid: unqiueId,
        },
      }
    );
    sessionStorage.setItem("unqiue_id", unqiueId);
    if (result.status === 200) {
      return result.data.data.access_token;
    } else {
      return null;
    }
  } catch (error: any) {
    clearSession();
    Promise.reject(error);
  }
};

const AxiosInterceptor = ({ children }: any) => {
  const naviagte = useNavigate();
  axiosInstance.interceptors.request.use(
    async (config: any) => {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      };
    },
    async (err) => {
      return Promise.reject(err);
    }
  );
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      if (
        err.response.data.code === 401 &&
        err.response.data.message === "Unauthorized request!"
      ) {
        const originalConfig = err.config;
        const accessToken = await refreshToken();
        if (accessToken) {
          sessionStorage.setItem("access_token", accessToken);
          return axiosInstance(originalConfig);
        } else {
          naviagte("/");
          clearSession();
        }
      } else if (
        err.response.data.code === 401 &&
        err.response.data.message ===
          "Your session has expired, Please signin again!"
      ) {
        naviagte("/");
        clearSession();
      } else if (err.response.data.code === 404) {
        naviagte("/error/404");
      } else {
        naviagte("/error/500");
      }
    }
  );
  return children;
};

export default axiosInstance;
export { AxiosInterceptor };
