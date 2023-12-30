import { Image, StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { HEADER_DELTA, MAX_HEADER_HEIGHT } from '../model/ConstantValues';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  cover: string;
  y: SharedValue<number>;
};

const Cover: FC<Props> = ({ cover, y }) => {
  const rImageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          y.value,
          [-MAX_HEADER_HEIGHT, 0],
          [4, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));
  const rOverlayStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [-64, 0, HEADER_DELTA],
      [0, 0.2, 1],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <Animated.View style={[styles.container, rImageStyle]}>
      <Image source={cover} style={styles.image} />
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'black',
          },
          rOverlayStyle,
        ]}
      />
    </Animated.View>
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
