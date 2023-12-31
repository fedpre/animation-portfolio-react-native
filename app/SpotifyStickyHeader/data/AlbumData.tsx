import { Album } from '../model/Album';

export const AlbumData: Album = {
  name: 'Remote Control',
  artist: 'Jan Blomqvist',
  release: 2016,
  monthlyListeners: '509,082',
  cover: require('../assets/Jan-Blomqvist.jpg'),
  tracks: [
    { name: 'Stories Over' },
    { name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis' },
    { name: 'Empty Floor' },
    { name: 'Her Great Escape' },
    { name: 'Dark Noise' },
    { name: 'Drift', artist: 'Jan Blomqvist, Aparde' },
    { name: 'Same Mistake' },
    {
      name: 'Dancing People Are Never Wrong',
      artist: 'Jan Blomqvist, The Bianca Story',
    },
    { name: 'Back in the Taxi' },
    { name: 'Ghosttrack' },
    { name: 'Just OK' },
    { name: 'The End' },
  ],
};
