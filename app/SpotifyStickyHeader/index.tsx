import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlbumView from './views/AlbumView';
import { StatusBar } from 'expo-status-bar';

const SpotifyStickyHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <AlbumView />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default SpotifyStickyHeader;

const styles = StyleSheet.create({});
