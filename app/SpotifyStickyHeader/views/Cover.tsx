import { Image, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { MAX_HEADER_HEIGHT } from '../model/ConstantValues';

type Props = {
  cover: string;
};

const Cover: FC<Props> = ({ cover }) => {
  const scale = 1;
  const opacity = 0.2;
  return (
    <View style={[styles.container, { transform: [{ scale }] }]}>
      <Image source={cover} style={styles.image} />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'black',
          opacity,
        }}
      />
    </View>
  );
};
export default Cover;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
