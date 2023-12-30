import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AlbumData } from '../data/AlbumData';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Cover from './Cover';
import Content from './Content';
import HeaderView from './HeaderView';
import {
  BUTTON_HEIGHT,
  HEADER_DELTA,
  MAX_HEADER_HEIGHT,
} from '../model/ConstantValues';
import ShufflePlay from './ShufflePlay';

const AlbumView = () => {
  const { monthlyListeners, artist, cover, tracks } = AlbumData;
  const y = useSharedValue(0);

  const rButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: Math.max(-y.value, -HEADER_DELTA + BUTTON_HEIGHT / 2),
      },
    ],
  }));
  return (
    <View style={styles.container}>
      <Cover {...{ cover, y }} />
      <Content {...{ artist, monthlyListeners, tracks, y }} />
      <HeaderView {...{ artist, y }} />
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: MAX_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
            left: 0,
            right: 0,
          },
          rButtonStyle,
        ]}
      >
        <ShufflePlay />
      </Animated.View>
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
