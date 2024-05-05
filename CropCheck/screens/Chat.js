import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, Image, ImageBackground, ActivityIndicator } from 'react-native';
import axios from 'axios'; // Import axios for making HTTP requests
import { getAuth } from "firebase/auth";
import Navbar from "./components/Navbar";
import { TranslationContext } from '../providers/TranslationProvider';

const backgroundimg = require("../assets/chatbotbg.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Chat = () => {
    const {t, switchLanguage} = useContext(TranslationContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const OPENAI_API_KEY = 'sk-proj-p4ngPTuSI0mdcLuq6Dv3T3BlbkFJhKHigu0svPHUTsqRhRsb';
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const currentUser = getAuth().currentUser;
    const username = currentUser.displayName;
    const [textInput, setTextInput] = useState('');

    const handleSend = async () => {
        setLoading(true); // Set loading state to true when sending request
        const prompt = textInput;
        try {
            const response = await axios.post(
                API_URL,
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ],
                    "temperature": 0.7
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`
                    }
                }
            );

            const promptText = response.data.choices.map(choice => choice.message.content.trim());
            setData([...data, { type: 'user', text: textInput }, { type: 'bot', text: promptText[0] }]);
            setTextInput('');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set loading state to false when response is received
        }
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
        ><View style={styles.textView}>
        <Text style={styles.text}>{t('chatbot')}</Text>
    </View>
            <View style={styles.container}>
                
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.body}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: item.type === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
                                <View style={[styles.messageBubble, { backgroundColor: item.type === 'user' ? '#DCF8C6' : '#E5E5EA' }]}>
                                    <Text style={{ fontSize: 16, color: item.type === 'user' ? 'green' : 'black', padding: 10 }}>
                                        {item.text}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
                <View style={{display: 'flex', flexDirection: 'row', marginTop: '10%', marginBottom: '10%', padding: 5,  borderColor: 'green', borderWidth: 0.7 }}>
                <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText={(text) => setTextInput(text)}
                    placeholder={t('query')}
                />
                <TouchableOpacity onPress={handleSend} style={styles.button}>
                    <Image source={require("../assets/arrow.png")} style={{height: 25, width: 25}}></Image>
                </TouchableOpacity>
                {loading && <ActivityIndicator style={styles.loadingIndicator} size="small" color="#0000ff" />}
                </View>
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
        // backgroundColor: 'red',
        // marginRight: 10,
        width: "100%",
        height: windowHeight*0.83,
        // flex: 1,
        // alignItems: 'center'
      },
    body: {
        width: windowWidth,
        margin: 10
    },
    messageBubble: {
        borderRadius: 20,
        maxWidth: '70%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginRight: 10,
        marginLeft: 10,
    },
    button: {
        backgroundColor: "green",
        // color: "black",
        width: "20%",
        height: "80%",
        // marginLeft: "60%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: "8%",
        marginTop: "1%"
    },
    input: {
        borderWidth: 1,
        width: "70%",
        padding: 10,
        borderColor: 'transparent',
        fontSize: 20,
        height: 60,
        marginBottom: 2,
        borderRadius: 10
    },
    navContainer: {
        height: windowHeight * 0.015,
    },
    loadingIndicator: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    text: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    textView: {
        paddingTop: "14%",
        height: windowHeight*0.15,
        // backgroundColor: "red",
    },
});
