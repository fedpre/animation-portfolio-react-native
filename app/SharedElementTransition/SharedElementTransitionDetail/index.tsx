import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const SharedElementTransitionDetail = () => {
  const image = require('../assets/thailand.jpg');
  return (
    <View style={{ flex: 1 }}>
      <Animated.Image
        source={image}
        sharedTransitionTag="backgroundImage"
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};

export default SharedElementTransitionDetail;

const styles = StyleSheet.create({});
