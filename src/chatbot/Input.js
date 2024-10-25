import React from 'react';

const Input = (props) => {
  return (
    <input
      className="react-chatbot-kit-chat-input"
      placeholder="메시지를 입력하세요"
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

export default Input;
