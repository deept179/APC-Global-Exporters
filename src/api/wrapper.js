import axios from "axios";
import Cookies from "js-cookie";
import { lazy } from "react";

// Create a user token
export const getUserToken = () => {
  const token = Cookies.get("token");
  return token;
};

export const wrapperAPI = async ({
  method,
  path,
  data = undefined,
  params = {},
  isTokenRequired = true,
}) => {
  const token = getUserToken();
  let headers = {};
  if (isTokenRequired) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const request = {
    url: `${process.env.REACT_APP_API_URL}/${path}`,
    method,
    headers,
    params,
    data,
  };

  try {
    const res = await axios(request);

    return res.data;
  } catch (error) {
    if (error.response.data.message === "Unauthenticated.") {
      Cookies.remove("token");
      window.location.href = "/login";
    }
    let isLoggin = Cookies.get("token")
    if (error.response.data.meta.status == "fail" && isLoggin) {
      setTimeout(() => {
        Cookies.remove("token");
        window.location.href = "/login";
      }, 3000);
    }
    throw error.response.data;
  }
};
