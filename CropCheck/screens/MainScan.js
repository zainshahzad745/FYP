import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { useRoute } from "@react-navigation/native";
import Navbar from "./components/Navbar";
import { TranslationContext } from "../providers/TranslationProvider";


const imgIcon = require("../assets/Planticon.png");
const Home = require("../assets/Homeicon.png");

import Modal from "react-native-modal";
import MainScreen from "./MainScreen";

const backgroundimg = require("../assets/backgroundimg.jpg");
const HomeIcon = require("../assets/Homeicon.png");



const Main = ({ navigation }) => {


  const {t, switchLanguage} = useContext(TranslationContext); 
  const windowHeight = Dimensions.get("window").height;
  const [loading, setLoading] = useState(true);
  const route = useRoute(); // Use useRoute hook to access route object
  const { savedImageUri, response } = route.params || {}; // Destructure savedImageUri from params

  useEffect(() => {
    console.log("Response:", response); // Log the response data
  }, [response]); 
  const names = response.disease_name;
  const disease = response.disease_name;

  // const [localSavedImageUri, setLocalSavedImageUri] = useState(null);



  useEffect(() => {
    const fetchSavedImage = async () => {
      try {
        const fileUri = FileSystem.documentDirectory + "photo.jpg";
        const fileExists = await FileSystem.getInfoAsync(fileUri);
        if (fileExists.exists) {
          setLocalSavedImageUri(fileUri);
        }
      } catch (error) {
        console.error("Error fetching saved image:", error);
        Alert.alert("Error", "Failed to fetch saved image.");
      }
    };
    fetchSavedImage();
  }, []);

  // UseEffect to hide the modal after a certain duration


  const GetSol = () => {
    // navigation.navigate("PossibleSol");
    navigation.navigate("PossibleSol", { names, disease, imageUri: savedImageUri || localSavedImageUri  });
  };

  const handleHome = () => {
    navigation.replace("MainScreen");
  };
  return (
    <ImageBackground
       source={backgroundimg}
       style={{ width: "100%", height: windowHeight }}
                                  >
        <View style={{ display: "flex", height: windowHeight*0.98 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "green",
            marginLeft: 25,
            marginTop: "20%",
            marginBottom: "2%"
          }}
        >{t('waterResult')}</Text>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 33,
            color: "green",
            marginLeft: 25,
            marginBottom: "3%"
          }}
        >{t('mainScantxt')}</Text>

        {(savedImageUri || localSavedImageUri) && (
          <Image
            source={{ uri: savedImageUri || localSavedImageUri }}
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              width: "90%",
              height: "40%",
              margin: 20,
              borderRadius: 20,
            }}
          />
        )}

        <Text
          style={{
            width: "100%",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          {disease}
        </Text>

        {/* <Text style={{ width: "100%", fontSize: 22, marginLeft: "6%", }}>
          {t('scanDisease')}
          <Text style={{ color: "red", fontSize: 20 }}>Wheat Rust</Text>
        </Text>

        <Text style={{ width: "100%", fontSize: 22, marginLeft: "6%" }}>
          {t('crop')}
          <Text style={{ color: "blue", fontSize: 20 }}>Rabi Crops</Text>
        </Text> */}

        <TouchableOpacity
          onPress={GetSol}
          style={{
            backgroundColor: "green", // Green background color
            opacity: 0.8, // Semi-transparent
            borderRadius: 50, // Custom border radius
            width: "80%", // Custom width
            height: "6%",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "8%",
            marginBottom: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, color: "white" }}>Get Solution</Text>
        </TouchableOpacity>
        {/* </View> */}
        
        <View style={{height: windowHeight*0.2,}}>
          <Navbar />
        </View>
      </View>
    </ImageBackground>
    
  );
};



export default Main;
