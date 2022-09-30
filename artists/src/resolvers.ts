import { Context } from "./app";
import * as Schema from "./generated/graphql";

export const resolvers = {
  Artist: {
    __resolveReference: (ref: Schema.Artist,  { dataSources }: Context) => {
      console.log(JSON.stringify(ref));

      return  dataSources.artistsAPI.getArtist(ref.id);
    },
  },
  Query: {
    artists: (_parent: any, _args: any, { dataSources }: Context) => {
      return dataSources.artistsAPI.getArtists();
    },
    artist: (
      _parent: any,
      args: Schema.QueryArtistArgs,
      { dataSources }: Context
    ) => {
      return dataSources.artistsAPI.getArtist(args.id);
    },
  }
  
};
