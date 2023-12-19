// SplashScreen.js
import React, { useEffect } from 'react';
import { ImageBackground, Image, Text, View, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Delay for 5 seconds and then navigate to the MainScreen
    const timer = setTimeout(() => {
      navigation.replace('RecentScans');
    }, 3000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/main1.png')}
      style={styles.background}
    >
      
      <View style={styles.container}>

      <Image
          source={require('../assets/logo.png')} // Set the path to your logo
          style={styles.logo}
        />

        <Text style={styles.text}>Crop Check</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, // Set the width of your logo
    height: 200, // Set the height of your logo
    marginBottom: 20, // Adjust the margin as needed
    marginLeft: -30,
  },

  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 50,
    marginLeft: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
