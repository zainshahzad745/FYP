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
<<<<<<< HEAD
import ForgetPassword from './screens/ForgetPassword';
=======
import Chatbot from './screens/Chatbot';
import WaterModule from './screens/WaterModule';
import TranslationProvider from './providers/TranslationProvider';
// import { Settings } from 'react-native';
// import 
import MainScreenHead from './screens/components/mainScreenHead';
>>>>>>> 15fd280a12032afe3cbb08dff2bf7f705ba79816
const Stack = createStackNavigator();

const App = () => {
  return (

    <TranslationProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen naem "logout" component={SettingsModal2} /> */}
        <Stack.Screen name="mainScreenHead" component={MainScreenHead} /> 
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="PlantAddScreen" component={PlantAddScreen} />
        <Stack.Screen name="RecentScans" component={RecentScans} />
        <Stack.Screen name="Disease" component={Disease} />
        <Stack.Screen name="Analyze" component={Analyzing} />
        <Stack.Screen name="MainScan" component={MainScan} />
        <Stack.Screen name="PossibleSol" component={PossibleSol} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="WaterModule" component={WaterModule} />
      </Stack.Navigator>
    </NavigationContainer>
    </TranslationProvider>
  );
};

export default App;
