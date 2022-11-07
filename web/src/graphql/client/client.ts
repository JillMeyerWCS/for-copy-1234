import { ApolloClient, InMemoryCache } from "@apollo/client";
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import introspectionQueryResultData from "../../generated/graphql/graphql.schema.json";
import { link } from "./utils";

const cache = new InMemoryCache({
  // @ts-ignore
  fragmentMatcher: new IntrospectionFragmentMatcher({
    // @ts-ignore
    introspectionQueryResultData,
  }),
  typePolicies: {
  },
});

const client = new ApolloClient({
  cache,
  link,
});

export { client };
