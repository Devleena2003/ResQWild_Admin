import axios from "axios";
const API = axios.create({
  baseURL: process.env.SERVER_DOMAIN,
});

export const getAllReport = () => API.get("/crime-reports/getall");
