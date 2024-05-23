import React, { useState, useEffect, useContext} from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import Navbar from './components/Navbar.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TranslationContext } from "../providers/TranslationProvider";
import { getAuth } from "firebase/auth";
import axios from 'axios'; // Import axios for making HTTP requests
import { TranslationContext } from '../providers/TranslationProvider';
const backgroundimg = require('../assets/backgroundimg.jpg');
const windowHeight = Dimensions.get("window").height;

const PossibleSol = ({navigation, route}) => {
  const { t, switchLanguage, language } = useContext(TranslationContext); 
  const { names, disease, imageUri, response } = route.params;
  const output = response.disease_name;
  console.log('PossibleSol type', output);
  const currentUser = getAuth().currentUser;
  email = currentUser.email;
  const [suggestions, setSuggestions] = useState([]);
  const OPENAI_API_KEY = 'sk-proj-p4ngPTuSI0mdcLuq6Dv3T3BlbkFJhKHigu0svPHUTsqRhRsb';
  console.log('current language in possible sol', language);

  let promptMessage;
  if (language === 'en') {
    promptMessage = `My plant has ${response.disease_name}. Can you suggest possible solutions?`;
  } else if (language === 'ur') {
    // Translate the prompt message to Urdu if necessary
    promptMessage = `میرے پودے کو ${response.disease_name} ہے۔ کیا آپ ممکنہ حل سراہ سکتے ہیں؟`;
  } else if (language === 'ps'){
    promptMessage = `د مېونه څخه ${response.disease_name} لري. آیا تاسو د ممکنه لارې پيشنهاد کولای شئ؟`;
  } else if (language === 'sn'){
    //sindhi translation
    promptMessage = `منهنجو پلانٽ ${response.disease_name} ۽ آهي. توهان جي ممڪن حلن جي سفارش ڪري سگهو؟`;
  } else if (language === 'pn'){
    //punjabi translation
    promptMessage = `میرے پودے وچ ${response.disease_name} اے۔ کیا توانائی والے حل سجاواں؟`
  } else if (language === 'bl'){
    // balochi translation
    promptMessage = `میرا پودا ${response.disease_name} ئے. کیا توانائی والے حل سوجائین؟`
  }
   // Replace with your actual API key

   useEffect(() => {
    // Function to send disease name to GPT API and get suggestions
    const fetchSuggestions = async () => {
      try {
        const gptResponse = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "user",
                "content": promptMessage
              }
            ],
            "temperature": 0.7
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
          }
        );

        // Extract and set suggestions from the API response
        const generatedSuggestions = gptResponse.data.choices.map(choice => choice.message.content.trim());
        setSuggestions(generatedSuggestions);
        console.log(promptMessage);
      } catch (error) {
        console.error('Error fetching suggestions:', error.message);
      }
    };

    fetchSuggestions();
  }, [response]);
  const sendDataToAPI = async () => {
    try {
      // const email = "zainshahza@gmail.com"; // Replace with the user's email
      const formData = new FormData();
      formData.append('email', email);
      formData.append('plant_name', names);
      formData.append('disease_name', disease);
      formData.append('solution', suggestions);
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg', // Change the type if necessary
        name: 'photo.jpg',
      });

      const response = await fetch('http://192.168.151.46:5000/sendData', {
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
          {/* Display the suggestions */}
          <ScrollView style={styles.scrollView}>
          <View style={{}}>
            {/* Display the suggestions */}
            {suggestions.map((suggestion, index) => (
              <Text key={index} style={styles.suggestionText}>{suggestion}</Text>
            ))}
          </View>
        </ScrollView>
        </View>
        <View style={{height: windowHeight*0.02, backgroundColor: 'red'}}>
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
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  img: {
    width: '85%', 
    height: '100%',
  },
  scrollView: {
    flex: 1,
  },
  TextBold: {
    fontSize: 45, 
    fontWeight: 'medium', 
  },
  TextView: {
    margin: "1%",
    marginTop: "1%",
    height: windowHeight*0.16,
  },
  Textlite: {
    margin: "7%",
    height: windowHeight*0.32,
  },
  suggestionText: {
    fontSize: 18,
  },
});

export default PossibleSol;
