import axios from "axios";

import { AppConfig } from "@/config";

export const api = axios.create({
  baseURL: AppConfig.api.baseUrl,
  timeout: AppConfig.api.timeout,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});