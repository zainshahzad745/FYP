import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
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
    );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
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
        // padding: "5%",
        // backgroundColor: "white",
    },
});

export default Chatbot;
