import axios from "axios";

const API_URL = "https://addis-test.herokuapp.com/api";
// const API_LOCAL = "http://localhost:5001/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
