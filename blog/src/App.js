/* esLint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] =  useState('강남 고기 맛집') // 데이터 바인딩 {posts}ㄴㄴ); {/* ES6 destructuring문법 */}
  let [글제목2,글제목변경2] =  useState(['남자코트추천2','우동맛집']); {/* ES6 destructuring문법 */}
  let [따봉,따봉변경] = useState(0)

  function 글제목바꾸기(){
    let newArray = [...글제목2]
    newArray[0] = "여자코트추천"
    글제목변경2(newArray)
  }

  let posts = '강남 고기 맛집' // 데이터 바인딩 {posts}
  function 함수(){
    return 100
  } //함수 바인딩
  

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color :'blue' , fontSize : '30px'}}>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목 }<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목2[0] }</h3>
        <p>2월 18일 발행</p>
        <button onClick={글제목바꾸기}>버튼</button>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목2[1] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <h4> {posts}</h4>
      <h4> {함수()} </h4>
      <img src={logo}/>
    </div>
    
  );
}

export default App;
