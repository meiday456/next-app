import axios from "axios";

const ApiUtils = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 10000,
  method: "get",
  params: {
    api_key: "048aa1eeba36d0b1a3c7d78f14379ccf", //환경변수로 값을 셋팅하도록 한다.
    language: "ko-KR",
    region: "KR",
  },
});

ApiUtils.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    return config;
  },
  error => {
    return;
  },
);
ApiUtils.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return;
  },
);

export default ApiUtils;
