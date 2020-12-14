import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Movie from './Movie';
import Details from './Details';
import Search from './Search';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{
            headerTitle: 'Movie App + RN Navigation',
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerStyle: {backgroundColor: '#4a90e2'},
          }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
