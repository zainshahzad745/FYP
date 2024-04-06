// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen'; 
import DetailedScreen from './screens/DetailedScreen';
import PlantAddScreen from './screens/AddPlantScreen';
import ScanScreen from './screens/components/ScanScreen';
import RecentScans from './screens/RecentScans';
import Disease from './screens/Disease';
import Analyzing from './screens/AnalyzingImage';
import MainScan from './screens/MainScan';
import PossibleSol  from './screens/PossibleSol';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
//import ForgetPassword from './screens/ForgetPassword';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="PlantAddScreen" component={PlantAddScreen} />
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
