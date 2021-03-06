/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import ColorSchema from './Utils/ColorSchema';
import BottomTabsNavigator from './Navigators/BottomTabsNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? ColorSchema.darker : ColorSchema.light,
  };

  return (
    <SafeAreaView style={backgroundStyle, styles.container}>
     <BottomTabsNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
