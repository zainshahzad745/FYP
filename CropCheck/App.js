import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen'; 
import DetailedScreen from './screens/DetailedScreen';
import PlantAddScreen from './screens/AddPlantScreen';
import ScanScreen from './screens/components/ScanScreen';
import Disease from './screens/Disease';
import Analyzing from './screens/AnalyzingImage';
import MainScan from './screens/MainScan';
import PossibleSol from './screens/PossibleSol';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Chatbot from './screens/Chatbot';
import WaterModule from './screens/WaterModule';
import ForgetPassword from './screens/ForgetPassword';
import NoDiseaseDetectedScreen from './screens/NoDiseaseDetectedScreen';
import * as NavigationBar from 'expo-navigation-bar';
import TranslationProvider from './providers/TranslationProvider';
import Chat from './screens/Chat';
import MainScreenHead from './screens/components/mainScreenHead';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe");
  }, []);

  return (
    <TranslationProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" hidden={true} />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SplashScreen"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="mainScreenHead" component={MainScreenHead} /> 
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
              <Stack.Screen name="ScanScreen" component={ScanScreen} />
              <Stack.Screen name="PlantAddScreen" component={PlantAddScreen} />
              <Stack.Screen name="Disease" component={Disease} />
              <Stack.Screen name="Analyze" component={Analyzing} />
              <Stack.Screen name="MainScan" component={MainScan} />
              <Stack.Screen name="PossibleSol" component={PossibleSol} />
              <Stack.Screen name="Chatbot" component={Chatbot} />
              <Stack.Screen name="WaterModule" component={WaterModule} />
              <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
              <Stack.Screen name="NoDiseaseDetectedScreen" component={NoDiseaseDetectedScreen} />
              <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </TranslationProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent', // Set to transparent to avoid any background color
  },
});

export default App;