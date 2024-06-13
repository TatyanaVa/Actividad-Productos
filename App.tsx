import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigation/StackNavigator';

export const App = () => {
  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  )
}
export default App;