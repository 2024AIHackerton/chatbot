import { createChatBotMessage } from 'react-chatbot-kit';
import Header from './Header';
import Input from './Input';

const config = {
  botName: "MyChatBot",
  initialMessages: [createChatBotMessage("안녕하세요! 무엇을 도와드릴까요?")],

  customComponents: {
    header: () => <Header />,
    input: (props) => <Input {...props} />, 
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "#81c147",
    },
    chatButton: {
      backgroundColor: "#81c147",
    },
  },
};

export default config;
