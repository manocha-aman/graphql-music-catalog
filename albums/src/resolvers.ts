import { Context } from "./app";
import * as DataSourceTypes from "./data-source-types";
import * as Schema from "./generated/graphql";

export const resolvers = {
  
  Album: {
    artist: (album:Schema.Album) => {
      console.log(JSON.stringify(album.artist));

      return {__typename:"Artist" , id:album.artist}
    }
  },
  Query: {
    albums: (_parent: any, _args: any, { dataSources }: Context) => {
      return dataSources.albumsAPI.getAlbums();
    },
    album: (
      _parent: any,
      args: Schema.QueryAlbumArgs,
      { dataSources }: Context
    ) => {
      return dataSources.albumsAPI.getAlbum(args.id);
    },
  }
};
