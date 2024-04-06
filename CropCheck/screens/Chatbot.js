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
// import "react-chat-elements/dist/main.css";
import { MessageList } from "react-chat-elements";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import Axios from "axios";
import Navbar from "./components/Navbar";

const backgroundimg = require("../assets/chatbotbg.png");
const Chatbot = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
        source={backgroundimg}
        style={styles.background}>
            <View style={styles.textView}>
            <Text style={styles.text}>AI Chatbot</Text>
            </View>
            <View style={styles.chat}>
            <MessageList
    className='message-list'
    lockable={true}
    toBottomHeight={'100%'}
    dataSource={[
    {
      position:"left",
      type:"text",
      title:"Kursat",
      text:"Give me a message list example !",
    },
    {
      position:"right",
      type:"text",
      title:"Emre",
      text:"That's all.",
    },
    ]}
/>
            </View>
            <View style={styles.navContainer}>
                <Navbar />
            </View>
        </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
      height: "100%",
      display: "flex",
      // backgroundColor:'black',
      // flex: 1,
      justifyContent: "center",
    },
    navContainer: {
        marginTop: "10%",
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
        marginTop: "12%",
    }});
export default Chatbot;
