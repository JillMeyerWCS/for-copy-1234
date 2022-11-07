import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { REACT_APP_GRAPHQL_WS } from "../../../utils";

export const subscriptionClient = new GraphQLWsLink(
  createClient({
    lazy: true,
    lazyCloseTimeout: 2000,
    retryAttempts: Infinity,
    shouldRetry: e => !!e,
    url: REACT_APP_GRAPHQL_WS || "",
  })
);
