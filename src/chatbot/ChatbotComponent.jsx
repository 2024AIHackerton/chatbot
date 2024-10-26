import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import '../chatbotCss/chatbot.css';

import config from './ChatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = () => {

  return (
    <div className="chatbot-container">
      <div className="chatbot-wrapper">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default ChatbotComponent;
