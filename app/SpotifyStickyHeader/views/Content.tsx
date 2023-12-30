import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { MAX_HEADER_HEIGHT } from '../model/ConstantValues';
import { LinearGradient } from 'expo-linear-gradient';
import { Track } from '../model/Album';
import TrackView from './TrackView';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  artist: string;
  monthlyListeners: string;
  tracks: Track[];
  y: SharedValue<number>;
};

const Content: FC<Props> = ({ artist, monthlyListeners, tracks, y }) => {
  const rGradientStyle = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [-MAX_HEADER_HEIGHT, 0],
      [0, MAX_HEADER_HEIGHT],
      Extrapolate.CLAMP
    ),
  }));

  const rTitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
      [0, 1, 0],
      Extrapolate.CLAMP
    ),
  }));

  const onScrollHandler = useAnimatedScrollHandler((event) => {
    y.value = event.contentOffset.y;
  });
  return (
    <Animated.ScrollView
      style={styles.container}
      onScroll={onScrollHandler}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={1}
    >
      <View style={styles.header}>
        <Animated.View style={[styles.gradient, rGradientStyle]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'black']}
          />
        </Animated.View>
        <Animated.View style={[styles.artistContainer, rTitleStyle]}>
          <Text style={styles.artist}>{artist.replace(' ', '\n')}</Text>
          <Text style={styles.viewCount}>
            {monthlyListeners} monthly listeners
          </Text>
        </Animated.View>
      </View>
      <View style={styles.tracks}>
        {tracks.map((track, key) => (
          <TrackView index={key + 1} {...{ track, key, artist }} />
        ))}
      </View>
    </Animated.ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: MAX_HEADER_HEIGHT,
  },
  viewCount: {
    textAlign: 'center',
    color: 'lightgray',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingTop: 12,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 72,
  },
  artist: {
    textAlign: 'center',
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: 'black',
  },
});
