import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        borderTop: '4px solid #fff',  // 양쪽 위 테두리만 추가
        borderTopLeftRadius: '15px',  // 왼쪽 위 테두리 둥글게
        borderTopRightRadius: '15px', // 오른쪽 위 테두리 둥글게
        height: '30px',
      }}
    >
      챗봇 타이틀 뭐로 할까
    </div>
  );
};

export default Header;
