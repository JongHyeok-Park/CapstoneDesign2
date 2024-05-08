import { Link } from 'react-router-dom';
import './SentimentResult.css';
import { useState } from "react";

function SentimentResult() {
  let [result, setResult] = useState("positive");

  return (
    <div className="result-wrapper">
      <div className="result">
        <div className="result-background">
          <img src={require('../assets/positive_background.png')} alt="positive_background" />
        </div>
        <div className='result-title'>
          <h3>감정분석 결과는 <span className='positive'>긍정적</span>이네요!</h3>
        </div>
        <div className="result-content">
          <div className='result-content-inner'>
            <span>... 감정분석 내용 ...</span>
            <p>
            "오늘의 긍정적인 마음을 잘 유지하고, 앞으로도 같은 마음가짐으로 노력하면 좋은 결과를 얻을 수 있을 거예요! 
            계속해서 긍정적인 에너지를 발산하며 앞으로 나아가세요. 힘내세요!"
            </p>
          </div>
          <Link id='consultingBtn' to="/consulting">상담하기</Link>
        </div>
      </div>
    </div>
  )
}

export default SentimentResult;