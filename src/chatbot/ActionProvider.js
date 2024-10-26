import axios from 'axios';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // 서버에 메시지 전송 및 응답 처리 함수
  async sendMessageToServer(message) {
    try {
      const response = await axios.post('http://172.31.99.206:5000/chat/', { message });
      
      // 서버 응답을 처리하여 챗봇에 표시
      console.log(response)
      console.log(response.data.response)
      const botMessage = this.createChatBotMessage(response.data.response || '응답을 받을 수 없습니다.');
      this.updateChatbotState(botMessage);
      
    } catch (error) {
      const errorMessage = this.createChatBotMessage('서버에 연결할 수 없습니다.');
      this.updateChatbotState(errorMessage);
    }
  }

  // 챗봇 상태 업데이트 함수
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  // 메시지 처리 호출
  handleUserMessage = (message) => {
    this.sendMessageToServer(message);
  };
}

export default ActionProvider;
