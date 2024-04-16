import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const Chatbox = () => {
    const [ messages, setMessages ] = useState([
        {
            _id: 1,
            text: "I am your Chatbot, how can I help you?",
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

    const generateChatbotResponse = (userMessage) => {
        switch (userMessage.toLowerCase()) {
            case "hello":
                return "Hi there! How can I assist you today?";
            case "how are you":
                return "I am just a chatbot, but thanks for asking.";
            case "bye":
                return "Goodbye! If you have any more questions, feel free to ask";
            
            default:
                return "I'm sorry, I didn't understand that. Can you please rephrase?"
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