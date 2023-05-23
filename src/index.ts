import { buildSchema } from "type-graphql";
import datasource from "./db";
import { ApolloServer } from "apollo-server";
import { CountryResolver } from "./resolver.ts/CountryResolver";

const start = async (): Promise<void> => {
  await datasource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    // plugins: [
    //   ApolloServerPluginDrainHttpServer({ httpServer }),
    //   ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    // ],
  });

  await server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

void start();
