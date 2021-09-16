import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/Search.screen';
import TourList from './src/screens/TourList.screen';
import { hp } from './src/utils/responsiveUI';

const Stack = createNativeStackNavigator();

console.ignoredYellowBox = true;

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name='TourListScreen'
        component={TourList}
        options={{
          headerTitle: 'Tours List',
          headerShadowVisible: false,
          headerTitleStyle: { fontSize: hp(2.4) },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
