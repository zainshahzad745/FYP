import React, {useContext} from "react";
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
import { TranslationContext } from "../providers/TranslationProvider";

const backgroundimg = require("../assets/chatbotbg.png");

const Chatbot = () => {
  const {t, switchLanguage} = useContext(TranslationContext);
  return (
    <ImageBackground
      source={backgroundimg}
      style={{
        // position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1,}}
      >
        <View style={styles.textView}>
          <Text style={styles.text}>{t('chatbot')}</Text>
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
    navContainer: {
        height: '9%',
        backgroundColor: 'green',
    },
    text: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    textView: {
        paddingTop: "15%",
        height: windowHeight*0.15,
        backgroundColor: "red"
    },
    chat: {
        height: "60%",
        position: "relative",
        // marginTop: "15%",
        // padding: "5%",
        // backgroundColor: "white",
    },
});

export default Chatbot;
