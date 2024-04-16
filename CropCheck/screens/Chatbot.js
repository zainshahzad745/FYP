import React from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import Chatbox from "./components/Chatbox";
import Navbar from "./components/Navbar";

const backgroundimg = require("../assets/chatbotbg.png");

const Chatbot = () => {
  return (
    <ImageBackground
      source={backgroundimg}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        resizeMode: "stretch",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
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
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
<<<<<<< Updated upstream
  navContainer: {
    marginTop: "35%",
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
  },
=======
    navContainer: {
        height: windowHeight*0.06,
    },
    text: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    textView: {
        paddingTop: "15%",
        height: windowHeight*0.2,
        // backgroundColor: "red",
    },
    chat: {
        height: windowHeight*0.74,
        // marginTop: "15%",
        // padding: "5%",
        // backgroundColor: "white",
    },
>>>>>>> Stashed changes
});

export default Chatbot;
