import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Button,
  Alert,
  ImageBackground,
  Dimensions,
  StyleSheet,
  ViewComponent,
} from "react-native";
import Chatbox from "./components/Chatbox";
import Navbar from "./components/Navbar";

const backgroundimg = require("../assets/chatbotbg.png");
const Chatbot = () => {
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={backgroundimg}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        resizeMode: "stretch",
      }}
    >
      <View style={styles.textView}>
        <Text style={styles.text}>AI Chatbot</Text>
      </View>
      <View style={styles.chat}>
        <Chatbox />
      </View>
      <View style={styles.navContainer}>
      <Navbar />
      </View>
    </ImageBackground>
    // </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    //   height: "100%",
    //   width: '100%',
    display: "flex",
    backgroundColor: "black",
    // flex: 1,
    justifyContent: "center",
  },
  navContainer: {
    marginTop: "35%",
  },
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  textView: {
    marginTop: "15%",
  },
  chat: {
    height: "60%",
    marginTop: "15%",
    // padding: "5%",
    // backgroundColor: "white",
  },
});

export default Chatbot;
