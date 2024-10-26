import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import axios from 'axios';
import 'react-chatbot-kit/build/main.css';
import '../chatbotCss/chatbot.css';

import config from './ChatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);

  const sendMessageToAPI = async (userMessage) => {
    try {
      const response = await axios.post('http://172.31.99.206:5000/chat', {
        message: userMessage,
      });
      setMessages([...messages, { type: 'bot', text: response.data.response }]);
    } catch (error) {
      console.error("API 요청 오류:", error);
    }
  };

  const handleUserMessage = (message) => {
    setMessages([...messages, { type: 'user', text: message }]);
    sendMessageToAPI(message); 
  };

  return (
    <div className="chatbot-container">
      <Chatbot
        config={config}
        messageParser={(props) => new MessageParser({ ...props, handleUserMessage })}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;
