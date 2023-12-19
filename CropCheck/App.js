import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import RecentScans from './screens/RecentScans';
import Disease from './screens/Disease'
// import MainScreen from './screens/MainScreen'; 
// import DetailedScreen from './screens/DetailedScreen';
// import PlantAddScreen from './screens/AddPlantScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="RecentScans" component={RecentScans} />
        <Stack.Screen name="Disease" component={Disease} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
