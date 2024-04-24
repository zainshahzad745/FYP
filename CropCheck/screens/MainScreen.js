// MainScreen.js
import React, {useContext} from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import MainScreenHead from "./components/mainScreenHead";
import ImageComponent from "./components/ImageComponent";
import Navbar from "./components/Navbar";
import ExpertOpinion from "./components/ExpertOpinion";
import { TranslationContext } from "../providers/TranslationProvider";
const backgroundimg = require("../assets/backgroundimg.jpg");

const MainScreen = ({ navigation }) => {
  const {t, switchLanguage} = useContext(TranslationContext); 
  const handleImageClick = () => {
    navigation.navigate("DetailedScreen");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundimg}
        style={styles.background}
      >
        <MainScreenHead navigation={navigation} />
        <Text style={styles.text}>{t('mainScan')}</Text>
        <View style={styles.imageContainer}>
          <ImageComponent
            onPress={handleImageClick}
            size={imageSize}
            imageSource={require("../assets/placeholder1.png")}
            imageText={"Wheat"}
          />
          <ImageComponent
            onPress={handleImageClick}
            size={imageSize}
            imageSource={require("../assets/placeholder2.jpg")}
            imageText={"Flax"}
          />
          <ImageComponent
            onPress={handleImageClick}
            size={imageSize}
            imageSource={require("../assets/placeholder3.jpg")}
            imageText={"Mustard"}
          />
          <ImageComponent
            onPress={handleImageClick}
            size={imageSize}
            imageSource={require("../assets/placeholder4.jpg")}
            imageText={"Peas"}
          />
        </View>
        <View style={styles.expert}>
          <ExpertOpinion />
        </View>
        <View style={styles.navContainer}>
          <Navbar />
        </View>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imageSize = (windowWidth - 20) / 2 - 10;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    // backgroundColor:'black',
    // flex: 1,
    justifyContent: "center",
  },
  navContainer: {
    // backgroundColor: 'red',
    height: windowHeight*0.06,
  },
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  text: {
    textAlign: "left",
    color: "#000000",
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Adjust as needed
    height: windowHeight*0.48,
    marginBottom: "5%"
  },
  expert: {
    marginBottom: "5%", // Adjust the margin as needed
  }
});

export default MainScreen;
