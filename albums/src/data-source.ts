import { DataSource } from "apollo-datasource";
import {
  AlbumResponse
} from "./data-source-types";
import { albums } from "./mock-data";

export class AlbumsAPI extends DataSource {
  constructor() {
    super();
  }

  async getAlbums() {
    return albums;
  }

  async getAlbum(id: string): Promise<AlbumResponse | undefined> {
    return albums.find((album) => album.id === id);
  }
}
