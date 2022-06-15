import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { LOCAL_STORAGE_USER, LOCAL_STORAGE_USER_TOKEN } from "../config/config";

const request = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000 * 5,
  responseType: "json",
});

request.interceptors.request.use(
  async function (config) {
    //AsyncStorage.clear();
    // const token = await AsyncStorage.getItem(LOCAL_STORAGE_USER_TOKEN);

    // if (request) {
    //   config.headers["x-ambie-token"] = token;
    // }
    config.headers["Content-Type"] = "application/json";
    return config;
  },

  async function (error) {
    return await Promise.reject(error);
  }
);

export const appendArgsToUrl = (url, queryParams) => {
  const queryString = [];
  Object.keys(queryParams).forEach(function (key) {
    if (queryParams[key] !== null) {
      queryString.push(`${key}=${encodeURIComponent(queryParams[key])}`);
    }
  });
  if (!queryString.length) {
    return url;
  }
  return `${url}?${queryString.join("&")}`;
};

function post(url, data, config) {
  return request.post(url, data, config);
}
function get(url, parameter, config) {
  const finalUrl = appendArgsToUrl(url, parameter);
  return request.get(finalUrl, config);
}

function put(url, data, config) {
  return request.put(url, data, config);
}

function remove(url, config) {
  return request.delete(url, config);
}

function patch(url, data, config) {
  return request.patch(url, data, config);
}

export default Object.freeze({
  get,
  post,
  put,
  remove,
  patch,
});
