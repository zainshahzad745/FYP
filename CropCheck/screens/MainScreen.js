// MainScreen.js
import React from "react";
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
const backgroundimg = require("../assets/backgroundimg.jpg");
const MainScreen = ({ navigation }) => {
  const handleImageClick = () => {
    navigation.navigate("PossibleSol");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundimg}
        style={styles.background}
      >
        <MainScreenHead />
        <Text style={styles.text}>Recently Scanned</Text>
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
        <ExpertOpinion />
        <View style={styles.navContainer}>
          <Navbar />
        </View>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
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
    marginTop: "10%",
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
  },
});

export default MainScreen;
