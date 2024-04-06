import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ActivityIndicator, navigation, replace} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const backgroundimg = require('../assets/backgroundimg.jpg');
const cactusicon = require("../assets/cactusicon.png");

const Analyzing = ({navigation}) => {
  useEffect(() => {
    // Delay for 5 seconds and then navigate to the MainScan
    const timer = setTimeout(() => {
      navigation.replace('MainScan');
    }, 10000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.Bg_img}>
        <Image source={cactusicon} style={{width: 200, height: 150, marginHorizontal: 130, marginTop: 170}}/>
        <Text style={styles.TextBold}>Analyzing Image</Text>
        <ActivityIndicator size='large' color='green' style={{flexDirection: 'row', justifyContent: 'space-around', padding: 50}}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Bg_img: {
    width: 450, 
    height: 770,
  },

  TextBold: {
    marginLeft:120, 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'black', 
    paddingTop: 40,
  },
});

export default Analyzing;