import React, { useState, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { TranslationContext } from "../../providers/TranslationProvider";
import axios from 'axios'; // Import axios for making HTTP requests


const Chatbox = () => {
    const {t, switchLanguage, language} = useContext(TranslationContext);
    const OPENAI_API_KEY = 'sk-proj-p4ngPTuSI0mdcLuq6Dv3T3BlbkFJhKHigu0svPHUTsqRhRsb';
    const [suggestions, setSuggestions] = useState([]); 
    const chatgpt_url = 'https://api.openai.com/v1/chat/completions';
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

    let promptMessage;
    if (language === 'en') {
        promptMessage = `Reply in English`;
    } else if (language === 'ur') {
        // Translate the prompt message to Urdu if necessary
        promptMessage = `Reply in Urdu`;
    } else if (language === 'ps'){
        promptMessage = `Reply in Pashto`;
    } else if (language === 'sn'){
        //sindhi translation
        promptMessage = `Reply in Sindhi`;
    } else if (language === 'pn'){
        //punjabi translation
        promptMessage = `Reply in Punjabi`;
    } else if (language === 'bl'){
        // balochi translation
        promptMessage = `Reply in Balochi`;
    }

    const generateChatbotResponse = async (userMessage) => {
        try {
            const response = await axios.post(chatgpt_url,
                {
                    prompt: `The following is a conversation with an AI assistant that specialises in plants and their diseases. It cannot answer anything else.
                    Human: ${userMessage} ${promptMessage}
                    AI:`,
                    max_tokens: 100,
                    temperature: 0.7,
                    n: 1,
                    stop: 'Human:',
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    },
                }
            );
            const { choices } = response.data;
            const { text: generatedText } = choices[0];
            return generatedText.trim();
        } catch (error) {
            console.error('Error fetching response:', error.message);
        }
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