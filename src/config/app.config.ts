import { env } from "./env";

export const AppConfig = Object.freeze({
  name: env.APP_NAME,

  version: env.VERSION,

  api: {
    baseUrl: env.API_URL,
    timeout: 30000,
  },

  pagination: {
    pageSize: 20,
  },
});