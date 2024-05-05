import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import axios from 'axios'; // Import axios for making HTTP requests
import { getAuth } from "firebase/auth";
import Navbar from "./components/Navbar";


const backgroundimg = require("../assets/chatbotbg.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Chat = () => {
    const [data, setData] = useState([]);
    const OPENAI_API_KEY = 'sk-proj-p4ngPTuSI0mdcLuq6Dv3T3BlbkFJhKHigu0svPHUTsqRhRsb';
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const currentUser = getAuth().currentUser;
    const username = currentUser.displayName;
    const [textInput, setTextInput] = useState('');

    const handleSend = async () => {
        const prompt = textInput;
        const response = await axios.post(API_URL, {
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7,
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });
        const text = response.data.choices[0].text;
        setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': text}]);
        setTextInput('');
    }
    return (
        <ImageBackground
            source={backgroundimg}
            style={{
            position: "absolute",
            width: windowWidth,
            height: windowHeight,
            resizeMode: "stretch",
            }}
        >
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.body}
                    renderItem={({item}) => {
                        <View style={{flexDirection: 'row', padding: 10}}>
                            <Text style={{fontWeight:'bold', color: item.type === 'user' ? 'green' : 'red'}}>{item.type === 'user' ? {username} : 'Chatbot'}</Text>
                            <Text style={styles.bot}>{item.text}</Text>
                        </View>
                    }}
                />
                <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText = {(text) => setTextInput(text)}
                    placeholder='Enter here'
                />
                <TouchableOpacity onPress={() => {handleSend}} style={styles.button}>
                {/* <Image source={require("../assets/arrow.png")} style={{marginLeft: "6%"}}></Image> */}
                <Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navContainer}>
                <Navbar />
            </View>
        </ImageBackground>
    )
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    body: {
        width: windowWidth,
        margin: 10
    },
    bot: {
        fontSize: 16
    },
    button: {
        backgroundColor: "green", 
        width: "40%", 
        height: "10%", 
        marginLeft: "60%", 
        borderRadius: 20, 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "row"
    },
    input: {
        borderWidth: 1,
        width: "90%",
        height: 60,
        marginBottom: 2,
        borderRadius: 10
    },
    navContainer: {
        height: windowHeight*0.015,
    },
    buttonText: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold"
    }
})