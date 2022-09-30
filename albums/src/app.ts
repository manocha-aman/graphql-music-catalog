import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { AlbumsAPI } from "./data-source";
import { resolvers } from "./resolvers";
import { buildFederatedSchema } from "@apollo/federation";
export interface Context {
  dataSources: DataSources;
}

interface DataSources {
  albumsAPI: AlbumsAPI;
}

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs, resolvers
    }]),
    dataSources: () => ({
      albumsAPI: new AlbumsAPI(),
    }),
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen(8001).then(({ url }) => {
  console.log(`🚀 Albums server ready at ${url}`);
});
