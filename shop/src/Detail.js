
import React, {useContext, useEffect, useState} from 'react';
import { useHistory, useParams  } from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss'
import { 재고context } from './App.js'; 

let 박스 = styled.div`
    padding : 20px;
`;

let 제목 = styled.h4`
    font-size : 25px;
    color : ${props => props.색상};
`;

/* 가장많이 쓰는 Lifecycle Hook (구버전)
class Detail2 extends React.Component{
    componentDidMount(){

    } //컴포넌트가 실행될때
    componentWillUnmount(){

    } //컴포넌트가 사라질때
} */










function Detail(props){
    let [alert,alert변경] = useState(true);
    let [inputData,inputData변경] = useState('');
    let 재고 = useContext(재고context)
    
    useEffect(()=>{
        let timer = setTimeout(()=>{alert변경(false)},2000)
        console.log('안녕')
        return ()=>{clearTimeout(timer)}
    },[alert]); // 새로운 LifeCycle Hook 컴포넌트가 실행 수정될때 실행됨 /[]안에는 실행조건/ alert라는 조건이 업데이트될때만 실행

    let {id} = useParams();
    let history = useHistory();
    let theItem = props.shoes.find(doc => doc.id == id);
    

    return(
        <div className="container">
            <박스>
                <제목 색상={'blue'}>Detail</제목>
                <제목 색상={'red'}>Detail</제목>
                <제목 className="red">Detail</제목>
            </박스>
            {inputData}
            <input onChange={(e)=>{inputData변경(e.target.value)}} />

            {
                alert === true
                ?
                <div className="myAlert3">
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>
                :null
            }
            <div className="row">
                <div className="col-md-6">
                <img src={theItem.url} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{theItem.title}</h4>
                <p>{theItem.content}</p>
                <p>{theItem.price}원</p>
                <Info 재고={props.재고}/>
                {재고}
                <button className="btn btn-danger" onClick={()=>{
                    
                    props.재고변경([9,10,11])
                }}>주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack()
                }}>뒤로가기</button>
                </div>
            </div>
        </div> 
    )
}   

function Info(props){
    return(
        <p>재고:{props.재고}</p>
    )
}

export default Detail