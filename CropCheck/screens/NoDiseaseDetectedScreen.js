import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
const backgroundimg = require("../assets/backgroundimg.jpg");
const NoDiseaseDetectedScreen = ({navigation}) => {
  return (
    <ImageBackground source={backgroundimg} resizeMode="cover" style={{ flex: 1 }}> 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>No disease detected.</Text>
      <Button title="Go back" onPress={() => navigation.replace('MainScreen')} />

    </View>
    </ImageBackground>
  );
};

export default NoDiseaseDetectedScreen;
