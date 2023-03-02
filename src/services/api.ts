import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-wheat.vercel.app/api",
});
