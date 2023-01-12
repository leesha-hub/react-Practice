// eslint-disable 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['강남 우동 추천','신사 우동 추천','논현 우동 추천']);
  let [logo, setLogo] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(0);
  
  // let num = [1,2];
  // let [a,c] = [1,2];
  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
     <div className="black-nav">
      <h4 id={post}>ReactBlog</h4>
     </div>
     
     <button onClick={()=>{
        let copyForSort = [...글제목];
        copyForSort.sort();
        console.log(copyForSort);
        글제목변경(copyForSort);
     }}>가나다순정렬</button>

     <button onClick={()=>{
        let copy = [...글제목];
        copy[1] = '신사 인기 우동 추천';
        글제목변경(copy);
     }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}> 👍</span> {따봉} </h4>
        <p>1월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <span onClick={()=>{ 글제목변경(['강남 우동 추천','신사 인기 우동 추천','논현 우동 추천']) }}> 😊</span> </h4>
        <p>2월 22일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>8월 8일 발행</p>
      </div>

      <Modal></Modal>
      
      <Modal/>

     <h4>{post}</h4>
    </div>
  );
}

// 1. let Modal = () => {} 도 가능

// 2. function 방법
function Modal() {
  return (
   /* <> */
      <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
      /* <div></div>
    </> */
  )
}

export default App;