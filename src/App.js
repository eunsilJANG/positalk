import React, { useEffect, useState } from 'react';
import megaphone from './assets/img/main/Megaphone.png';
import { Navigate, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate('/trans');
  };

  return (
    <div className="container">
      <main className="main">
        <div className="content">
          <div className="text-section">
            <h2 className="title">
              세상에 따뜻함과 <br />
              긍정의 에너지를 더하다!
            </h2>
            <p className="description">
              이쁜말 변환기는 AI 딥러닝 기술을 활용하여 일상에서 사용되는 거친
              표현이나 부정적인 문장을 긍정적인 말로 바꿔주는 서비스입니다.
            </p>
            <button className="button" onClick={Navigate}>
              체험하러가기
            </button>
          </div>
          <div className="image-section">
            <img src={megaphone} alt="Megaphone" className="megaphone-image" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
