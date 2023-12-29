import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { FC } from 'react';
import { BUTTON_HEIGHT, BUTTON_WIDTH } from '../model/ConstantValues';

type Props = {};

const ShufflePlay: FC<Props> = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.button}>
        <Text style={styles.label}>SHUFFLE PLAY</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShufflePlay;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#1ed760',
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    borderRadius: 32,
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
});
