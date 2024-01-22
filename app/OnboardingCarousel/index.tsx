import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import OnboardingScreen from './OnboardingScreen';
import Paginator from './Paginator';

export type DataType = {
  id: string;
  title: string;
  description: string;
  image: number;
};

const OnboardingCarousel = () => {
  const translateX = useSharedValue(0);
  const indexRef = useSharedValue(0);
  const { width: pageWidth, height: pageHeight } = Dimensions.get('window');
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(indexRef.value);
    }, 16); // Sync with screen refresh rate approximately

    return () => clearInterval(id);
  }, []);

  const DATA: DataType[] = [
    {
      id: '0',
      image: require('../../assets/1.jpg'),
      title: 'Discover A New Way To Travel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '1',
      image: require('../../assets/2.jpg'),
      title: 'Your Next Adventure Starts Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      image: require('../../assets/3.jpg'),
      title: 'Take A Trip Like Never Before',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const rTitleStyle = useAnimatedStyle(() => {
    const screenIndex = Math.round(translateX.value / pageWidth);
    indexRef.value = screenIndex;
    const inputRangeOpacity = [
      (screenIndex - 1) * pageWidth + pageWidth * 0.8,
      screenIndex * pageWidth,
      (screenIndex + 1) * pageWidth - pageWidth * 0.8,
    ];

    const inputRangeTranslateY = [
      (screenIndex - 1) * pageWidth,
      screenIndex * pageWidth,
      (screenIndex + 1) * pageWidth,
    ];

    const opacity = interpolate(
      translateX.value,
      inputRangeOpacity,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      translateX.value,
      inputRangeTranslateY,
      [80, 1, 80],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [
        {
          translateY,
        },
        // {
        //   scale: opacity,
        // },
      ],
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#222' }}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {DATA.map((item, screenIndex) => (
          <OnboardingScreen
            key={screenIndex}
            item={item}
            screenIndex={screenIndex}
            translateX={translateX}
          />
        ))}
      </Animated.ScrollView>
      <Animated.Text
        style={[
          {
            fontSize: 48,
            position: 'absolute',
            bottom: 400,
            color: '#fff',
            left: 16,
            fontWeight: 'bold',
          },
          rTitleStyle,
        ]}
      >
        {DATA[currentIndex].title}
      </Animated.Text>
      <Paginator translateX={translateX} />
    </View>
  );
};

export default OnboardingCarousel;

const styles = StyleSheet.create({});
