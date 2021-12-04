import axios from "axios";

const instanceConfig = {
  baseURL: "/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
};

const http = axios.create(instanceConfig);

export default http;
