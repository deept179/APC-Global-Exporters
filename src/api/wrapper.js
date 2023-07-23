import axios from "axios";
import Cookies from "js-cookie";
import { lazy } from "react";

// Create a user token
export const getUserToken = () => {
  const token = Cookies.get("token");
  return token;
};

export const wrapperAPI = async ({ method, path, data = undefined, params = {}, isTokenRequired = true, }) => {
  const token = getUserToken();
  let headers = {};
  if (isTokenRequired) {
    headers = {
      // Authorization: `Bearer ${token}`,
      'Content-Type': "application/json",
    };
  }
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${path}`
  try {
    return fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(data),
    }).then((data) => data.json());
  } catch (error) {
    throw error;
  }
};
