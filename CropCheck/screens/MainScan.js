import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert, TouchableOpacity, Dimensions } from "react-native";
import * as FileSystem from "expo-file-system";
import { useRoute } from "@react-navigation/native";
import Modal from "react-native-modal";
import Navbar from "./components/Navbar";
import { TranslationContext } from "../providers/TranslationProvider";

const backgroundimg = require("../assets/backgroundimg.jpg");

const Main = ({ navigation }) => {
  const { t, switchLanguage } = useContext(TranslationContext);
  const windowHeight = Dimensions.get("window").height;
  const route = useRoute();
  const { savedImageUri, response } = route.params || {};
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (response && response.disease_name === "detections") {
      setModalVisible(true);
    }
  }, [response]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    navigation.replace("MainScreen");
  };

  const names = response ? response.disease_name : "";
  const disease = response ? response.disease_name : "";

  const GetSol = () => {
    navigation.navigate("PossibleSol", { names, disease, imageUri: savedImageUri, response });
  };
  
  const handleHome = () => {
    navigation.replace("MainScreen");
  };

  return (
    <ImageBackground source={backgroundimg} style={{ width: "100%", height: windowHeight }}>
      <View style={{ display: "flex", height: windowHeight * 0.98 }}>
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>No disease detected</Text>
            <Button title="Close" onPress={toggleModal} />
          </View>
        </Modal>
        
        <Text style={styles.title}>{t('waterResult')}</Text>
        <Text style={styles.subtitle}>{t('mainScantxt')}</Text>

        {(savedImageUri) && (
          <Image
            source={{ uri: savedImageUri }}
            style={styles.image}
          />
        )}

        <Text style={styles.diseaseText}>{disease}</Text>

        <TouchableOpacity
          onPress={GetSol}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Solution</Text>
        </TouchableOpacity>
        
        <View style={{ height: windowHeight * 0.5, marginTop: '21%'}}>
          <Navbar />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "green",
    marginLeft: 25,
    marginTop: "20%",
    marginBottom: "2%"
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 33,
    color: "green",
    marginLeft: 25,
    marginBottom: "3%"
  },
  image: {
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    height: "40%",
    margin: 20,
    borderRadius: 20
  },
  diseaseText: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  button: {
    backgroundColor: "green",
    opacity: 0.8,
    borderRadius: 50,
    width: "80%",
    height: "6%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "8%",
    marginBottom: "15%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 25,
    color: "white"
  }
});

export default Main;
