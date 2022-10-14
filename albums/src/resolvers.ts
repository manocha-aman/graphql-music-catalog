import { Context } from "./app";
import * as DataSourceTypes from "./data-source-types";
import * as Schema from "./generated/graphql";
import { Artist } from "./generated/graphql";

export const resolvers = {
  Artist: {
    albums: async (
      artist: Artist,
      _: any, 
      { dataSources }: Context) => {
      const albums = await dataSources.albumsAPI.getAlbums()
      return albums.filter(album => album.artist === artist.id)
    }
  },
  Album: {
    artist: (album: Schema.Album) => {
      return { __typename: "Artist", id: album.artist }
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
