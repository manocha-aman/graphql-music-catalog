export type ArtistResponse = {
  id: string;
  name: string;
  country: string;
};


type ArtistNotFoundError = {
  kind: "artist-not-found-error";
};

type DuplicateAlbumError = {
  kind: "duplicate-album-error";
};
