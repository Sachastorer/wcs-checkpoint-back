import { buildSchema } from "type-graphql";
import datasource from "./db";
import { ApolloServer, gql } from "apollo-server-express";

const start = async (): Promise<void> => {
  await datasource.initialize();

  // const schema = await buildSchema({
  //   resolvers: [Country],
  // });

  // const server = new ApolloServer({
  //   schema,
  //   csrfPrevention: true,
  //   cache: "bounded",
  //   plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  // });

  // await server.listen().then(({ url }) => {
  //   console.log(`🚀  Server ready at ${url}`);
  // });

  // app.listen(5001, () => {
  //   console.log("listening on port 5001");
  // });
};

void start();