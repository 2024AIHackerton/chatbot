class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // 사용자의 메시지를 `handleUserMessage`로 전달
    if (message) {
      this.actionProvider.handleUserMessage(message);
    }
  }
}

export default MessageParser;