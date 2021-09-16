import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SearchBar } from '../components';
import { BACKGROUND } from '../constants/colors.constant';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
});

const SearchScreen = () => (
  <SafeAreaView style={styles.main}>
    <SearchBar />
  </SafeAreaView>
);

export default SearchScreen;
