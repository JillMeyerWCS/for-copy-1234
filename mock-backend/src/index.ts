import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mocks } from "./mocks";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  schema: addMocksToSchema({
    mocks: mocks,
    schema: makeExecutableSchema({ typeDefs, resolvers: {} }),
  }),
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
