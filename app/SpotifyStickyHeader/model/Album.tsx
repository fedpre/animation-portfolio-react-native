export interface Album {
  name: string;
  artist: string;
  release: number;
  cover: string;
  tracks: Track[];
}

export interface Track {
  name: string;
  artist?: string;
}
