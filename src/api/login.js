import { wrapperAPI } from "./wrapper";

export const loginAPI = async (data) => {
  try {
    const login = await wrapperAPI({
      method: "POST",
      path: `user/signin`,
      data: data,
      isTokenRequired: false,
    });
    return login;
  } catch (error) {
    throw error;
  }
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
