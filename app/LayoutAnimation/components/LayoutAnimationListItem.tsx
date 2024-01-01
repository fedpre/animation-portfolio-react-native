import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  FadeInLeft,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';

const LIST_ITEM_COLOR = '#D72483';
const LayoutAnimationListItem = ({ item, initialState, index, onDelete }) => {
  return (
    <Animated.View
      key={item.id}
      style={styles.listItem}
      entering={
        initialState.current ? FadeInLeft.delay(100 * index) : FadeInLeft
      }
      exiting={FadeOutRight}
      layout={Layout.delay(100)}
      onTouchEnd={() => onDelete(item.id)}
    />
  );
};

export default LayoutAnimationListItem;

const styles = StyleSheet.create({
  listItem: {
    height: 100,
    width: '90%',
    backgroundColor: LIST_ITEM_COLOR,
    marginVertical: 10,
    borderRadius: 20,
    // Shadow on Android
    elevation: 5,
    // Shadow on iOS
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
  },
});
