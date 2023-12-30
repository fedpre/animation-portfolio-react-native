import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Constants from 'expo-constants';
import {
  HEADER_DELTA,
  MAX_HEADER_HEIGHT,
  MIN_HEADER_HEIGHT,
} from '../model/ConstantValues';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Feather as Icon } from '@expo/vector-icons';

type Props = {
  artist: string;
  y: SharedValue<number>;
};

const HeaderView: FC<Props> = ({ artist, y }) => {
  const rHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [HEADER_DELTA - 16, HEADER_DELTA],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));
  const rHeaderTitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [HEADER_DELTA - 8, HEADER_DELTA - 4],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <Animated.View style={[styles.container, rHeaderStyle]}>
      <Icon name="chevron-left" color="white" size={24} />
      <Animated.Text style={[styles.title, rHeaderTitleStyle]}>
        {artist}
      </Animated.Text>
      <Icon name="more-horizontal" color="white" size={24} />
    </Animated.View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: MIN_HEADER_HEIGHT,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
});
