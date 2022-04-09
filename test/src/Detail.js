import React, {useState} from 'react';
import { useHistory, useParams  } from 'react-router-dom'

function Detail(props){

    let history = useHistory();
    let {id} = useParams();
    console.log(id)
    console.log(history)
    let theItem = props.shoes.find((doc)=>{return doc.id == id})
    console.log(theItem)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={theItem.url} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{theItem.title}</h4>
                <p>{theItem.content}</p>
                <p>{theItem.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack()
                }}>돌아가기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail

