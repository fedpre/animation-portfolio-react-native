import { Dimensions, StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import OnboardingScreen from './OnboardingScreen';
import Paginator from './Paginator';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';

export type DataType = {
  id: string;
  title: string;
  description: string;
  image: number;
};

const OnboardingCarousel = () => {
  const translateX = useSharedValue(0);
  const indexRef = useSharedValue(0);
  const prevTranslateX = useSharedValue(0);
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
      description:
        'A seamless travel planning experience is here. Easily book top-rated experiences, reserve your favorite hotel, and more!',
    },
    {
      id: '1',
      image: require('../../assets/2.jpg'),
      title: 'Your Next Adventure',
      description:
        'Get the inside scoop on every destination on your list. Reserve hotels, book experiences, and keep your trip planning details all in one spot.',
    },
    {
      id: '2',
      image: require('../../assets/3.jpg'),
      title: 'Take A Trip Like Never Before',
      description:
        'Effortlessly find and reserve the hotels and experiences that will turn your trip into a lifelong favorite memory.',
    },
  ];

  const rTitleStyle1 = useAnimatedStyle(() => {
    const screenIndex = Math.round(translateX.value / pageWidth);
    indexRef.value = screenIndex;

    const inputRangeOpacity = [
      (screenIndex - 1) * pageWidth + pageWidth * 0.2,
      screenIndex * pageWidth,
      (screenIndex + 1) * pageWidth - pageWidth * 0.2,
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

    const translateXTransform = interpolate(
      translateX.value,
      inputRangeTranslateY,
      [-80, 1, -80],
      Extrapolate.CLAMP
    );

    prevTranslateX.value = translateX.value;

    return {
      opacity,
      transform: [
        {
          translateX: translateXTransform,
        },
      ],
    };
  });

  const rTitleStyle2 = useAnimatedStyle(() => {
    const screenIndex = Math.round(translateX.value / pageWidth);
    const inputRange = [
      (screenIndex - 1) * pageWidth,
      screenIndex * pageWidth,
      (screenIndex + 1) * pageWidth,
    ];
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });

  return (
    <>
      <StatusBar style="light" />
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
              left: 24,
              fontWeight: 'bold',
            },
            rTitleStyle1,
            // rTitleStyle2,
          ]}
        >
          {DATA[currentIndex].title}
        </Animated.Text>
        <Animated.Text
          style={[
            {
              fontSize: 16,
              position: 'absolute',
              bottom: 330,
              color: '#fff',
              left: 24,
              width: pageWidth * 0.8,
            },
            rTitleStyle1,
            // rTitleStyle2,
          ]}
        >
          {DATA[currentIndex].description}
        </Animated.Text>
        <Paginator translateX={translateX} />
      </View>
    </>
  );
};

export default OnboardingCarousel;

const styles = StyleSheet.create({});
