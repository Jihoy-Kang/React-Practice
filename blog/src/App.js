/* esLint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() { //부모 컴포넌트
  let [글제목,글제목변경] =  useState('강남 고기 맛집') // 데이터 바인딩 {posts}ㄴㄴ); {/* ES6 destructuring문법 */}
  let [글제목2,글제목변경2] =  useState(['남자코트추천2','우동맛집',"파이썬고수"]); {/* ES6 destructuring문법 */}
  let [따봉,따봉변경] = useState([0,0,0])
  let [modal, modal변경] = useState(false)
  let array = [2,3,4];
  let [누른제목,누른제목변경] = useState(0)
  let [입력값,입력값변경] = useState("")


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

    {
      글제목2.map((a,i)=>{
        return <div className="list" key={i}>
                <h3 onClick={()=>{ 누른제목변경(i) }}>{ a }<span onClick={()=>{
                  let new_따봉 = [...따봉] //새로운 배열에 복사
                  new_따봉[i] ++ // 새로운 배열에 바뀐숫자입력
                  따봉변경(new_따봉) // 기존 useState 배열의 값을 새배열의 값으로 변경 
                  }}>👍</span>{따봉[i]}</h3> 
                <p>2월 19일 발행</p>
                <hr/>
              </div>
      })
    }


      <hr/>  

      {/* <button onClick={()=>{ 누른제목변경(0) }}>버튼1</button> 
      <button onClick={()=>{누른제목변경(1) }}>버튼2</button> 
      <button onClick={()=>{ 누른제목변경(2)}}>버튼3</button>  */}

      <div className="publish">
        <input onChange={(e)=>{ 입력값변경(e.target.value)}} />
        <button onClick={()=>{
          let arrayCopy = [...글제목2]
          arrayCopy.unshift(입력값) // unshift 배열 맨앞에 추가
          글제목변경2(arrayCopy)
          따봉.push(0)
          /* 글제목2.map((a,i)=>{
            return <div className="list" key={i}>
                    <h3 onClick={()=>{ 누른제목변경(i) }}>{ a }<span onClick={()=>{
                      let new_따봉 = [...따봉] //새로운 배열에 복사
                      new_따봉[i] ++ // 새로운 배열에 바뀐숫자입력
                      따봉변경(new_따봉) // 기존 useState 배열의 값을 새배열의 값으로 변경 
                      }}>👍</span>{따봉[i]}</h3> 
                    <p>2월 19일 발행</p>
                    <hr/>
                  </div>
          }) 굳이 중복된 코드 사용할필요없음 */
        }}>저장</button>
      </div>


      <button onClick={()=>{modal변경(modal == false)}}>열고닫기</button>
      {
        modal == true
        ? <Modal 글제목2={글제목2} 누른제목={누른제목}></Modal> //app의 자식컴포넌트 props로 부모컴포넌트가 가진 state 사용가능
        : null
      }
      
    </div>
    
  );
}

function Modal(props){
  return(
    <div class ="modal">
      <h2>{props.글제목2[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
