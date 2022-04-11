import React, {useContext, useEffect, useState} from 'react';
import { useHistory, useParams  } from 'react-router-dom'
import { Button,Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Detail.scss'
import {재고context} from './App.js';
import {CSSTransition} from "react-transition-group"
import {connect} from 'react-redux'

function Detail(props){
    let [alert,alert변경] = useState(true);
    let 재고 = useContext(재고context);
    let [tab,tab변경] = useState(0)
    let [스위치,스위치변경] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            alert변경(false)
        },2000)
    });

    let history = useHistory();
    let {id} = useParams();
    console.log(id)
    console.log(history)
    let theItem = props.shoes.find((doc)=>{return doc.id == id})
    console.log(theItem)
    return(
        <div className="container">
            <div className='red'>Detail</div>
            {
                alert == true 
                ?  <div className='myAlert3'>
                    <p>재고가 얼마 남지않았습니다.</p>
                    </div>
                : null
            }
            
            <div className="row">
                <div className="col-md-6">
                <img src={theItem.url} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{theItem.title}</h4>
                <p>{theItem.content}</p>
                <p>{theItem.price}</p>
                <Info 재고={props.재고}></Info>
                {재고}
                <button className="btn btn-danger" onClick={()=>{
                    props.재고변경([9,10,11])
                    props.dispatch({type:'항목추가', payload:{id:2, name :'새로운상품', quan : 1}})
                    history.path("/cart");
                    }}>주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack()
                }}>돌아가기</button> 
                </div>
            </div>
            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); tab변경(0)}}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); tab변경(1)}}>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{ 스위치변경(false); tab변경(2)}}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent tab={tab} 스위치변경={스위치변경} />
            </CSSTransition>
            
            
        </div> 
    )
}

function TabContent(props){
    useEffect(()=>{
        props.스위치변경(true)
    })
    if(props.tab === 0){
        return <div>000</div>
    }else if(props.tab === 1){
        return <div>111</div>
    }else if(props.tab === 2){
        return <div>222</div>
    }



}


function Info(props){
    return <p>재고 : {props.재고[0]}</p>
}

function state를props화(state){
    return {
        /* 상품명 : state[0].name */
        state : state.reducer,
        alert열렸니 : state.reducer2
    }
}

export default connect(state를props화)(Detail)

/* export default Detail */

