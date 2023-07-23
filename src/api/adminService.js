import { wrapperAPI } from "./wrapper";

export const loginAPI = async (data) => {
  const login = await wrapperAPI({
    method: "POST",
    path: `user/signin`,
    data: data,
    isTokenRequired: true,
  });
  return login;
};

export const getSiteList = async () => {
  const siteData = await wrapperAPI({
    method: "POST",
    path: `managesite/list`,
    isTokenRequired: true,
  });
  return siteData;
};

// export const logOutAPI = async (data) => {
//   try {
//     const logout = await wrapperAPI({
//       method: "POST",
//       path: `logout`,
//       data: data,
//       isTokenRequired: true,
//     });
//     return logout;
//   } catch (error) {
//     throw error;
//   }
// };
