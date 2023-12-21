import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScan from './screens/MainScan';
import AnalyzingImage from './screens/AnalyzingImage'; 
import PossibleSol from './screens/PossibleSol';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AnalyzingImage" component={AnalyzingImage} />
        <Stack.Screen name="MainScan" component={MainScan} />
        <Stack.Screen name="PossibleSol" component={PossibleSol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;