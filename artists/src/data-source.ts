import { DataSource } from "apollo-datasource";
import {
  ArtistResponse
} from "./data-source-types";
import { artists } from "./mock-data";

export class ArtistsAPI extends DataSource {
  constructor() {
    super();
  }

  async getArtists() {
    return artists;
  }

  async getArtist(id: string): Promise<ArtistResponse | undefined> {
    return artists.find((artist) => artist.id === id);
  }
}
