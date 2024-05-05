import React, { useState, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { TranslationContext } from "../../providers/TranslationProvider";
import axios from 'axios'; // Import axios for making HTTP requests


const Chatbox = () => {
    const {t, switchLanguage} = useContext(TranslationContext); 
    const OPENAI_API_KEY = 'sk-proj-p4ngPTuSI0mdcLuq6Dv3T3BlbkFJhKHigu0svPHUTsqRhRsb';
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const [ messages, setMessages ] = useState([
        {
            _id: 1,
            text: t('chatbox'),
            createdAt: new Date(),
            user: { _id: 2, name: "Chatbot" },
        },
    ]);
    
    const handleSend = ( newMessages = []) => {
        setMessages((previousMessages) => 
            GiftedChat.append(previousMessages, newMessages)
        );

        const userMessage = newMessages[0].text;
        const botResponse = generateChatbotResponse(userMessage);

        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: botResponse,
                    createdAt: new Date(),
                    user: { _id: 2, name: "Chatbot" },
                },
            ])
        );
    };

    const generateChatbotResponse = async (userMessage) => {
        const prompt = userMessage;
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
        setData([...data, {type: 'user', 'text': userMessage}, {type: 'bot', 'text': text}]);
        setTextInput('');
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={(newMessages) => handleSend(newMessages)}
            user={{ _id: 1, name: "User"}}
        />
    );
};

export default Chatbox;