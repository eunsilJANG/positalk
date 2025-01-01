import React, { useState } from 'react';
import '../assets/css/trans.css';
import trans from '../assets/img/trans/trans.png';
import copy from '../assets/img/trans/copy.png';
import sound from '../assets/img/trans/sound.png';

function Trans() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleConvert = () => {
    // 변환 로직 (예시로 스타일에 따라 간단히 변환)
    let result = inputText;
    if (selectedStyle === '공손체') {
      result = inputText + ' (공손체로 변환됨)';
    } else if (selectedStyle === '귀엽게') {
      result = inputText + ' (귀엽게 변환됨)';
    } else if (selectedStyle === '반말체') {
      result = inputText + ' (반말체로 변환됨)';
    } else {
      result = inputText + ' (변환 옵션 선택 안 됨)';
    }
    setOutputText(result);
  };

  return (
    <div className="app-container">
      <div className="converter-container">
        <div className="input-section">
          <div className="input-box-container">
            <div className="input-box">
              <p className="input-label">원문</p>
              <textarea
                placeholder="변환할 문장을 입력해주세요"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="input-textarea"
              ></textarea>
              <button onClick={handleConvert} className="convert-button">
                변환하기
              </button>
            </div>
          </div>
        </div>
        <div className="output-section">
          <div className="output-box">
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="style-select"
            >
              <option value="">이쁘게</option>
              <option value="공손체">공손하게(존댓말)</option>
              <option value="귀엽게">귀엽게</option>
              <option value="반말체">반말체</option>
            </select>
            <textarea
              readOnly
              value={outputText}
              className="output-textarea"
            ></textarea>
            <div className="image-container">
              <img src={sound} alt="sound" className="sound-image" />
              <img src={copy} alt="copy" className="copy-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trans;
