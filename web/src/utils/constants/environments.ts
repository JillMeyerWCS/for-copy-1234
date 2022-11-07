export const REACT_APP_URL =
  process.env.NODE_ENV === "development" || !window.REACT_APP_URL
    ? process.env.REACT_APP_URL
    : window.REACT_APP_URL;

export const REACT_APP_API_URL =
  process.env.NODE_ENV === "development" || !window.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : window.REACT_APP_API_URL;

export const REACT_APP_GRAPHQL_URL =
  process.env.NODE_ENV === "development" || !window.REACT_APP_GRAPHQL_URL
    ? process.env.REACT_APP_GRAPHQL_URL
    : window.REACT_APP_GRAPHQL_URL;

export const REACT_APP_GRAPHQL_WS =
  process.env.NODE_ENV === "development" || !window.REACT_APP_GRAPHQL_WS
    ? process.env.REACT_APP_GRAPHQL_WS
    : window.REACT_APP_GRAPHQL_WS;
