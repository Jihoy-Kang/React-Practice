import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집' // 데이터 바인딩 {posts}
  function 함수(){
    return 100
  } //함수 바인딩
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color :'blue' , fontSize : '30px'}}>개발 Blog</div>
      </div>
      <h4> {posts}</h4>
      <h4> {함수()} </h4>
      <img src={logo}/>
    </div>
  );
}

export default App;
