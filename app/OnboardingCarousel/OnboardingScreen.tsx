import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { DataType } from '.';

interface Props {
  screenIndex: number;
  item: DataType;
  translateX: SharedValue<number>;
}

const OnboardingScreen: React.FC<Props> = ({
  screenIndex,
  item,
  translateX,
}) => {
  const { width: pageWidth, height: pageHeight } = Dimensions.get('window');

  const rImageStyle = useAnimatedStyle(() => {
    const inputRange = [
      (screenIndex - 1) * pageWidth,
      screenIndex * pageWidth,
      (screenIndex + 1) * pageWidth,
    ];
    const outPutRange = [0, 1, 0];
    const opacity = interpolate(
      translateX.value,
      inputRange,
      outPutRange,
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });

  return (
    <Animated.View
      key={screenIndex}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: pageWidth,
        height: pageHeight,
        flexDirection: 'row',
      }}
    >
      <Animated.Image
        source={item.image}
        style={[{ width: pageWidth, height: pageHeight }, rImageStyle]}
      />
    </Animated.View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
