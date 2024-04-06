import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import RecentScans from './screens/RecentScans';
import Disease from './screens/Disease';
import Analyzing from './screens/AnalyzingImage';
import MainScan from './screens/MainScan';
import PossibleSol  from './screens/PossibleSol';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
const Stack = createStackNavigator();

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
        <Stack.Screen name="Analyze" component={Analyzing} />
        <Stack.Screen name="MainScan" component={MainScan} />
        <Stack.Screen name="PossibleSol" component={PossibleSol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
