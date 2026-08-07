const required = (value: string | undefined, name: string): string => {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
};

export const env = Object.freeze({
  APP_NAME: required(import.meta.env.VITE_APP_NAME, "VITE_APP_NAME"),

  API_URL: required(import.meta.env.VITE_API_URL, "VITE_API_URL"),

  VERSION: import.meta.env.VITE_APP_VERSION ?? "1.0.0",

  NODE_ENV: import.meta.env.MODE,
});