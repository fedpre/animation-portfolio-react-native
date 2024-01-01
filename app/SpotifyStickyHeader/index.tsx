import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import AlbumView from './views/AlbumView';

const SpotifyStickyHeader = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AlbumView />
    </>
  );
};

export default SpotifyStickyHeader;

const styles = StyleSheet.create({});
