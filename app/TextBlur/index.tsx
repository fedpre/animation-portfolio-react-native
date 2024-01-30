import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import {
  Blur,
  Canvas,
  SkFont,
  Text,
  useFont,
} from '@shopify/react-native-skia';
import {
  Easing,
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');
const FONT_SIZE = 140;

interface Props {
  text: string;
  spacingOffset: number;
  font: SkFont;
  index: number;
  fingerPosition: SharedValue<{ x: number; y: number }>;
}

const Letter = ({
  text,
  spacingOffset,
  font,
  index,
  fingerPosition,
}: Props) => {
  const letterWidth = font.getTextWidth(text);
  const xPosition = (width - letterWidth) / 2;

  const blurValue = useDerivedValue(() => {
    const isXInRange =
      fingerPosition.value.x > xPosition &&
      fingerPosition.value.x < xPosition + letterWidth;

    const isYInRange =
      fingerPosition.value.y > spacingOffset * index - FONT_SIZE &&
      fingerPosition.value.y < spacingOffset * index;

    const isInRange = isXInRange && isYInRange;

    return withTiming(isInRange ? 0 : 15, {
      duration: 350,
      easing: Easing.linear,
    });
  });

  return (
    <Text
      font={font}
      text={text}
      x={xPosition}
      y={spacingOffset * index}
      color={'#fff'}
    >
      <Blur blur={blurValue} />
    </Text>
  );
};

const TextBlur = () => {
  const message = 'FOCUS'.split('');
  const font = useFont(require('./fonts/Roboto-Bold.ttf'), FONT_SIZE);
  const spacingOffset = height / 5 - 10;

  const fingerPosition = useSharedValue({ x: 0, y: 0 });

  if (!font) {
    return null;
  }

  const gesture = Gesture.Pan()
    .onBegin(({ x, y }) => {
      fingerPosition.value = { x, y };
    })
    .onChange(({ x, y }) => {
      fingerPosition.value = { x, y };
    })
    .onEnd(() => {
      fingerPosition.value = { x: 0, y: 0 };
    })
    .onFinalize(() => {
      fingerPosition.value = { x: 0, y: 0 };
    });

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <Canvas style={styles.canvas}>
          {message.map((letter, index) => (
            <Letter
              key={index}
              text={letter}
              spacingOffset={spacingOffset}
              font={font}
              index={index + 1}
              fingerPosition={fingerPosition}
            />
          ))}
        </Canvas>
      </View>
    </GestureDetector>
  );
};

export default TextBlur;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  canvas: {
    flex: 1,
    marginTop: 15,
  },
});
