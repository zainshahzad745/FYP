import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import Navbar from './components/Navbar.js';
const backgroundimg = require('../assets/backgroundimg.jpg');
const imgIcon = require('../assets/Planticon.png');
const Home = require('../assets/Homeicon.png');

const Main = ({ navigation }) => {
  const Home = () => {
    // navigation.navigate('MainScreen');
  };
  
  const GetSol = () => {
    navigation.navigate('PossibleSol');
  };

  return (
    // <ImageBackground source={backgroundimg} style={styles.Bg_img}>
      <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.Bg_img}>

        <View>
          <Image source={Home} style={styles.icon} ></Image>
        </View>
        <View style={styles.TextBOLD}>
        <Text style={styles.TextBold} >Results</Text>
        </View>
        <View style={styles.Textlite}>
          <Text style={{fontWeight: 'medium', fontSize: 35}}>Your Plant is</Text>
          <Image source={imgIcon} style={styles.img} imageText={'Wheat'}/>
          <Text style={{fontWeight: 'medium', fontSize: 25}}>Wheat</Text>
        </View>
        <View style={styles.Text}>
          <Text>Recognized Disease</Text>
          <Text style={{color: 'red'}}>Wheat Rust</Text>
        </View>
        <View style={styles.Text}> 
          <Text>Crop Type</Text>
          <Text style={{color: 'blue'}}>Rabi Crops</Text>
        </View>
        <View style={styles.button}>
          <Button title="Get Solution" onPress={GetSol}/>
        </View>
        {/* <Navbar/> */}
      </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bg_img: {
    width: '100%', 
    height: '100%',
  },
  img: {
    width: 150, 
    height: 150,
    padding: 10,
  },
  TextBold: {
    fontSize: 50, 
    fontWeight: 'medium', 
    color: 'black',
    paddingLeft: 45, 
  },
  TextBOLD: {
    justifyContent: 'flex-start',
    // flex: 1,
    // padding: 50,
  },
  Textlite: {
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 25,
  },
  Text: {
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: 45,
    padding: 7,
  },
  button: {
    marginTop: 60,
    padding: 6,
    // borderRadius: 20,
    // borderWidth: 3,
    color: 'green',
    width: 190,
    marginLeft: 140,
  },
  icon: {
    margin: 30,
    width: 45,
    height:50,
    alignItems: 'flex-start',
  },
});

export default Main;
