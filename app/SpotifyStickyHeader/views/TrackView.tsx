import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Track } from '../model/Album';
import { Feather as Icon } from '@expo/vector-icons';

type Props = {
  track: Track;
  artist: string;
  index: number;
};

const TrackView: FC<Props> = ({ track, artist, index }) => {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={[styles.cell, { flex: 1 }]}>
        <Text style={styles.name}>{track.name}</Text>
        <Text style={styles.artist}>{track.artist || artist}</Text>
      </View>
      <View style={styles.cell}>
        <Icon name="more-horizontal" color="#b2b3b4" size={24} />
      </View>
    </View>
  );
};

export default TrackView;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  cell: {
    padding: 16,
    justifyContent: 'center',
  },
  index: {
    color: '#b2b3b4',
  },
  artist: {
    color: '#b2b3b4',
  },
  name: {
    color: 'white',
  },
});
