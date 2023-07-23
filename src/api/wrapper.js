import Cookies from "js-cookie";

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
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status <= 209) {
          const responseData = JSON.parse(xhr.responseText);
          resolve(responseData);
        } else {
          resolve(JSON.parse(xhr.responseText));
        }
      };
      xhr.onerror = function () {
        console.error('Network error occurred');
      };
      xhr.setRequestHeader('Content-Type', 'application/json');
      if (data) {
        xhr.send(JSON.stringify(data));
      } else {
        xhr.send();
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }

};
