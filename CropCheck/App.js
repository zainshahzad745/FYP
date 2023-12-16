// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen'; 
import DetailedScreen from './screens/DetailedScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
