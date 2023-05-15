import axios from "axios";
import urls from "./Urls";
const ApiUtils = axios.create({
  baseURL: urls.common.base,
  timeout: 10000,
  method: "get",
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    language: "ko-KR",
    region: "KR",
  },
});

ApiUtils.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    return config;
  },
  error => {},
);
ApiUtils.interceptors.response.use(
  response => {
    return response;
  },
  error => {},
);

export default ApiUtils;
