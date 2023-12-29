import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AlbumData } from '../data/AlbumData';
import { useSharedValue } from 'react-native-reanimated';
import Cover from './Cover';
import Content from './Content';
import HeaderView from './HeaderView';
import { BUTTON_HEIGHT, MIN_HEADER_HEIGHT } from '../model/ConstantValues';
import ShufflePlay from './ShufflePlay';

const AlbumView = () => {
  const { name, artist, cover, tracks } = AlbumData;
  const y = useSharedValue(0);
  return (
    <View style={styles.container}>
      <Cover cover={cover} />
      <Content artist={artist} tracks={tracks} />
      <HeaderView artist={artist} />
      <View
        style={{
          position: 'absolute',
          top: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
          left: 0,
          right: 0,
        }}
      >
        <ShufflePlay />
      </View>
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
