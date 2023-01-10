import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,b] = useState(['강남 우동 추천','신사 우동 추천','논현 우동 추천']);
  let [logo, setLogo] = useState('ReactBlog');
  
  // let num = [1,2];
  // let [a,c] = [1,2];
  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
     <div className="black-nav">
      <h4 id={post}>ReactBlog</h4>
     </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
     <h4>{post}</h4>
    </div>
  );
}

export default App;
