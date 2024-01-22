import { StyleSheet, View } from 'react-native';
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
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 200,
        left: 160,
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
