import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  circleIndex: number;
  translateX: SharedValue<number>;
}

const PaginatorComponent: FC<Props> = ({ circleIndex, translateX }) => {
  const { width: pageWidth, height: pageHeight } = Dimensions.get('window');

  const rStyle = useAnimatedStyle(() => {
    const pageIndex = Math.round(translateX.value / pageWidth);
    return {
      width: withTiming(pageIndex === circleIndex ? 50 : 20),
      backgroundColor: withTiming(
        pageIndex === circleIndex ? 'white' : 'gray',
        { duration: 100 }
      ),
    };
  });

  return (
    <Animated.View
      key={circleIndex}
      style={[
        {
          height: 6,
          borderRadius: 50,
          margin: 4,
        },
        rStyle,
      ]}
    />
  );
};

export default PaginatorComponent;

const styles = StyleSheet.create({});
