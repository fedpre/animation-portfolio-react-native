import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { MAX_HEADER_HEIGHT } from '../model/ConstantValues';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  artist: string;
};

const Content: FC<Props> = ({ artist }) => {
  const height = MAX_HEADER_HEIGHT;
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={1}
    >
      <View style={styles.header}>
        <View style={[styles.gradient, { height }]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'black']}
          />
        </View>
        <View style={styles.artistContainer}>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
    </ScrollView>
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
