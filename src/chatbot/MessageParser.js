class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("안녕")) {
        this.actionProvider.greet();
      }
    }
  }
  
  export default MessageParser;
  