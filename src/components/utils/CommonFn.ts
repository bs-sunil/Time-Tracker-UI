import { clearSession } from "../../services/auth.service";

export function getQueryStringParameterByName(parameterName: any) {
  let url = window.location.href;
  parameterName = parameterName.replace(/[\[\]]/g, "\\$&");
  var regularExpression = new RegExp(
    "[?&]" + parameterName + "(=([^&#]*)|&|#|$)"
  ),
    results = regularExpression.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function roleWiseUserNavigation() {
  const currentRole = sessionStorage.getItem("roles");
  let dashboardNavigateUrl = "";
  if (currentRole === "OEMAdmin") {
    dashboardNavigateUrl = "/dashboard";
  }
  if (currentRole === "OEMMember") {
    dashboardNavigateUrl = "/management/activity";
  } else if (currentRole === "ClientAdmin") {
    dashboardNavigateUrl = "/activity/approvereject";
  }
  return dashboardNavigateUrl;
}

export function handleError(error: any) {
  let errorNavigation = ""
  if (error.status === 401) {
    clearSession()
    errorNavigation = "/error/401"
  } else if (error.status === 403) {
    clearSession()
    errorNavigation = "/error/403"
  } else if (error.status === 404) {
    clearSession()
    errorNavigation = "/error/404"
  } else if (error.status === 500) {
    clearSession()
    errorNavigation = "/error/500"
  } else {
    clearSession()
    errorNavigation = "/error/401"
  }
  return errorNavigation
}
