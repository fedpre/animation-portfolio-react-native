import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import PaginatorComponent from './PaginatorComponent';
import { SharedValue } from 'react-native-reanimated';

type PaginatorProps = {
  translateX: SharedValue<number>;
};
/**
 * @param translateX The value coming from the scroll handler in the Animated.ScrollView. Use *useAnimatedScrollHandler* to get the value.
 */
const Paginator: React.FC<PaginatorProps> = ({ translateX }) => {
  const { width: pageWidth, height: pageHeight } = Dimensions.get('window');
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 250,
        left: pageWidth * 0.5 - 60,
      }}
    >
      {Array.from({ length: 3 }).map((_, circleIndex) => (
        <PaginatorComponent
          key={circleIndex}
          translateX={translateX}
          circleIndex={circleIndex}
        />
      ))}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({});
