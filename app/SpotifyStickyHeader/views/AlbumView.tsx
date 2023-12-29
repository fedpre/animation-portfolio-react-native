import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AlbumData } from '../data/AlbumData';
import { useSharedValue } from 'react-native-reanimated';
import Cover from './Cover';
import Content from './Content';

const AlbumView = () => {
  const { name, artist, cover, tracks } = AlbumData;
  const y = useSharedValue(0);
  return (
    <View style={styles.container}>
      <Cover cover={cover} />
      <Content artist={artist} />
    </View>
  );
};

export default AlbumView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
