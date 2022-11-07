import { ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import { createUploadLink } from "apollo-upload-client";
import { REACT_APP_GRAPHQL_URL } from "../../../utils";
import { subscriptionClient as wsLink } from "./subscriptionClient";

const uploadLink: ApolloLink = createUploadLink({
  uri: REACT_APP_GRAPHQL_URL || "",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${
          locations?.join(", ") ?? "unknown"
        }, Path: ${path?.join(", ") ?? "unknown"}`
      )
    );
  if (networkError)
    console.error(
      `[Network error]: ${networkError.message} ${networkError.stack ?? ""}`
    );
});

export const link = errorLink.split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  uploadLink
);

