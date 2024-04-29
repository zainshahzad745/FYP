import React, { useState, useEffect } from "react";
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

const imgIcon = require("../assets/Planticon.png");
const Home = require("../assets/Homeicon.png");

import Modal from "react-native-modal";
import MainScreen from "./MainScreen";

const backgroundimg = require("../assets/backgroundimg.jpg");
const HomeIcon = require("../assets/Homeicon.png");



const Main = ({ navigation }) => {
  const names = "Wheat";
  const disease = "Wheat Rust";

  const windowHeight = Dimensions.get("window").height;
  const [loading, setLoading] = useState(true);
  const route = useRoute(); // Use useRoute hook to access route object
  const { savedImageUri } = route.params || {}; // Destructure savedImageUri from params

  const [localSavedImageUri, setLocalSavedImageUri] = useState(null);



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
  useEffect(() => {
    console.log("Loading:", loading);
    if (loading) {
      const hideModalTimer = setTimeout(() => {
        setLoading(false);
        console.log("Modal hidden");
      }, 5000); // Set the duration here (e.g., 10 seconds)
      console.log("Modal shown");
      // Clear timeout if component unmounts or when loading is false
      return () => clearTimeout(hideModalTimer);
    }
  }, [loading]);

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
       style={{ width: "100%", height: "100%" }}
                                  >
        <View style={{ display: "flex" }}>
        <TouchableOpacity onPress={handleHome}>
          <Image
            source={Home}
            style={{
              width: 40,
              height: 40,
              alignContent: "center",
              marginLeft: 25,
              marginTop: "15%",
            }}
          ></Image>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "green",
            marginLeft: 25,
          }}
        >
          Results
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            color: "green",
            marginLeft: 25,
          }}
        >
          Your Plant is
        </Text>

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
            fontSize: 35,
            textAlign: "center",
          }}
        >
          {names}
        </Text>

        <Text style={{ width: "100%", fontSize: 25, marginLeft: "6%" }}>
          Recognized Disease {" "}
          <Text style={{ color: "red", fontSize: 20 }}>{disease}</Text>
        </Text>

        <Text style={{ width: "100%", fontSize: 25, marginLeft: "6%" }}>
          Crop Type{" "}
          <Text style={{ color: "blue", fontSize: 20 }}>Rabi Crops</Text>
        </Text>

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
            marginTop: "8%", // Custom height
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, color: "white" }}>Get Solution</Text>
        </TouchableOpacity>
        {/* </View> */}
        <Modal
          isVisible={loading}
          animationIn="zoomIn"
          animationOut="zoomOut"
          backdropOpacity={0.4}
        >
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 40,
                borderRadius: 20,
              }}
            >
              <ActivityIndicator size="70" color="green" />
              <Image
                source={require("../assets/cactusicon.png")}
                style={{ width: 250, height: 250, marginTop: 20 }}
              />
              <Text
                style={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Analyzing.....
              </Text>
            </View>
          </View>
        </Modal>
        <View style={{height: windowHeight*0.2, backgroundColor: "red"}}>
          <Navbar />
        </View>
      </View>
    </ImageBackground>
    
  );
};



export default Main;
