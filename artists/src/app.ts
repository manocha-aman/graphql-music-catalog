import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { ArtistsAPI as ArtistsAPI } from "./data-source";
import { resolvers } from "./resolvers";
import { buildFederatedSchema } from "@apollo/federation";
export interface Context {
  dataSources: DataSources;
}

interface DataSources {
  artistsAPI: ArtistsAPI;
}

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs, resolvers
    }]),
    dataSources: () => ({
      artistsAPI: new ArtistsAPI(),
    }),
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen(8002).then(({ url }) => {
  console.log(`🚀 Artists server ready at ${url}`);
});
