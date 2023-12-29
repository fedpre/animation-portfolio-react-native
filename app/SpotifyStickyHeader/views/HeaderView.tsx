import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Constants from 'expo-constants';
import { MIN_HEADER_HEIGHT } from '../model/ConstantValues';

type Props = {
  artist: string;
};

const HeaderView: FC<Props> = ({ artist }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{artist}</Text>
    </View>
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
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
});
