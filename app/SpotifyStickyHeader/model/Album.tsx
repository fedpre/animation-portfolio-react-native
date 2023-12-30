export interface Album {
  name: string;
  artist: string;
  monthlyListeners: string;
  release: number;
  cover: string;
  tracks: Track[];
}

export interface Track {
  name: string;
  artist?: string;
}
