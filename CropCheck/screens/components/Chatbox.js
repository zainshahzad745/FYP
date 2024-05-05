import React, { useState, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { TranslationContext } from "../../providers/TranslationProvider";
import axios from 'axios'; // Import axios for making HTTP requests


const Chatbox = () => {
    const {t, switchLanguage, language} = useContext(TranslationContext);
    const OPENAI_API_KEY = 'sk-proj-p4ngPTuSI0mdcLuq6Dv3T3BlbkFJhKHigu0svPHUTsqRhRsb';
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    // const [ messages, setMessages ] = useState([
    //     {
    //         _id: 1,
    //         text: t('chatbox'),
    //         createdAt: new Date(),
    //         user: { _id: 2, name: "Chatbot" },
    //     },
    // ]);
    
    const [ messages, setMessages ] = useState([]);

    // const handleSend = async ( newMessages = []) => {
    //     setMessages((previousMessages) => 
    //         GiftedChat.append(previousMessages, newMessages)
    //     );

    //     const userMessage = newMessages[0].text;

    //     try {
    //         const botResponse = await generateChatbotResponse(userMessage);

    //         setMessages((previousMessages) =>
    //             GiftedChat.append(previousMessages, [
    //                 {
    //                     _id: Math.round(Math.random() * 1000000),
    //                     text: botResponse,
    //                     createdAt: new Date(),
    //                     user: { _id: 2, name: "Chatbot" },
    //                 },
    //             ])
    //         );
    //     } catch (error) {
    //         console.error("Error generating chatbot response:", error);
    //     }
    // };

    const handleSend = async (newMessages = []) => {
        // Append the new messages to the state
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessages)
        );

        // Extract the user message
        // const userMessage = newMessages[0].text;

        try {
            // Generate the bot response asynchronously
            // const botResponse = await generateChatbotResponse(userMessage);
            const botResponse = messages;
            console.log(botResponse);

            // Append the bot response to the state
            setMessages(previousMessages =>
                GiftedChat.append(previousMessages, [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: botResponse,
                        createdAt: new Date(),
                        user: { _id: 2, name: "Chatbot" },
                    },
                ])
            );
        } catch (error) {
            console.error("Error generating chatbot response:", error);
            // Handle error here, if needed
        }
    };

    // const generateChatbotResponse = async (userMessage) => {
    //     const prompt = userMessage;
    //     const response = await axios.post(API_URL, {
    //         prompt: `${prompt}`,
    //         max_tokens: 100,
    //         temperature: 0.7,
    //     },{
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${OPENAI_API_KEY}`
    //         }
    //     });
    //     const text = response.data.choices[0].text;
    //     return text;
    //     // setData([...data, {type: 'user', 'text': userMessage}, {type: 'bot', 'text': text}]);
    // };

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
            console.log("generate response running");
            const response = await axios.post(API_URL,
                {
                    "model": "gpt-3.5-turbo",
                    // prompt: `The following is a conversation with an AI assistant that specialises in plants and their diseases. It cannot answer anything else.`,
                    "messages": [
                    {
                        "role": "user",
                        "content": `${userMessage} ${promptMessage}`
                    }
                    ],
                    "temperature": 0.7

                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    },
                }
            );
            console.log("response.data",response);
            // const { choices } = response.data;
            // const { text: generatedText } = choices[0];
            // console.log("response",generatedText);
            // const text = response.data.choices[0].text;
            // console.log("text", text);
            const generatedResponse = gptResponse.data.choices.map(choice => choice.message.content.trim());
            console.log(generatedResponse);
            setMessages(generatedResponse);
            console.log(messages);
            // return text;
        } catch (error) {
            console.error('Error fetching response:', error.message);
            // throw error;
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