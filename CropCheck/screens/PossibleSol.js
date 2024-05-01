import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import Navbar from './components/Navbar.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TranslationContext } from "../providers/TranslationProvider";
import { getAuth } from "firebase/auth";

const backgroundimg = require('../assets/backgroundimg.jpg');
const windowHeight = Dimensions.get("window").height;

const PossibleSol = ({navigation, route}) => {
  const {t, switchLanguage} = useContext(TranslationContext); 
  const {names, disease, imageUri} = route.params;
  const currentUser = getAuth().currentUser;
  email = currentUser.email;
  // Sample solution
  const solution = "Lorem Ipsum abj caj kb cjka bcjk abkj cb dkj cbkjb dkjbs kjbsc jbsdk bcmsn cvwv could'nt";

  // Function to send data to the API
  const sendDataToAPI = async () => {
    try {
      // const email = "zainshahza@gmail.com"; // Replace with the user's email
      const formData = new FormData();
      formData.append('email', email);
      formData.append('plant_name', names);
      formData.append('disease_name', disease);
      formData.append('solution', solution);
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg', // Change the type if necessary
        name: 'photo.jpg',
      });

      const response = await fetch('http://192.168.1.8:5000/sendData', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to send data to the server');
      }

      // Handle success response
      const data = await response.json();
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error sending data to the server:', error.message);
    }
  };

  sendDataToAPI(); 

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.Bg_img}>
        <View style={styles.TextView}>
          <Text style={styles.TextBold}>{t('possibleSol')}</Text>
        </View>
        <View style={styles.imgCont}>  
          <Image source={{uri: imageUri}} style={styles.img}/>
        </View>
        <View style={styles.Textlite}>
          <Text style={{fontSize: 22}}>{solution}</Text>
        </View>
        <View style={{height: windowHeight*0.02}}>
          <Navbar/>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Bg_img: {
    width: '100%', 
    height: '100%',
  },
  imgCont: {
    height: windowHeight*0.30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '85%', 
    height: '100%',
  },
  TextBold: {
    fontSize: 45, 
    fontWeight: 'medium', 
  },
  TextView: {
    margin: "7%",
    marginTop: "20%",
    height: windowHeight*0.16,
  },
  Textlite: {
    margin: "7%",
    height: windowHeight*0.32,
  },
});

export default PossibleSol;
