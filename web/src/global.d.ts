export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_URL: string;
      REACT_APP_API_URL: string;
      REACT_APP_GRAPHQL_URL: string;
      REACT_APP_GRAPHQL_WS: string;

      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  };
  interface Window {
    REACT_APP_URL: string;
    REACT_APP_API_URL: string;
    REACT_APP_GRAPHQL_URL: string;
    REACT_APP_GRAPHQL_WS: string;
  }
};
