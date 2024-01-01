import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import LayoutAnimationListItem from './components/LayoutAnimationListItem';

const BACKGROUND = '#2B2D42';

interface Item {
  id: number;
}

const elements: Item[] = new Array(5)
  .fill(0)
  .map((_, index) => ({ id: index }));

const LayoutAnimation = () => {
  const initialState = useRef(true);
  const [items, setItems] = useState<Item[]>(elements);

  useEffect(() => {
    initialState.current = false;
  }, []);

  const onAddItem = useCallback(() => {
    setItems((currentItems) => {
      return [...currentItems, { id: currentItems.length }];
    });
  }, []);

  const onDelete = useCallback((id: number) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }, []);

  const { bottom } = useSafeAreaInsets();
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 4 * bottom,
        }}
      >
        {items.map((item, index) => (
          <LayoutAnimationListItem
            key={item.id}
            item={item}
            index={index}
            onDelete={onDelete}
            initialState={initialState}
          />
        ))}
      </ScrollView>
      <Pressable
        style={(state) => {
          if (state.pressed) {
            return [styles.floatingButton, { opacity: 0.5 }];
          }
          return styles.floatingButton;
        }}
        onPress={onAddItem}
      >
        <Ionicons name="add" size={40} color="white" />
      </Pressable>
    </SafeAreaView>
  );
};

export default LayoutAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  scrollview: {
    flex: 1,
  },
  floatingButton: {
    height: 80,
    aspectRatio: 1,
    backgroundColor: 'black',
    borderRadius: 40,
    position: 'absolute',
    right: '5%',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
