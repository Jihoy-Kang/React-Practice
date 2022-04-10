import React, {useEffect, useState} from 'react';
import { useHistory, useParams  } from 'react-router-dom'
import './Detail.scss'

function Detail(props){
    let [alert,alert변경] = useState(true)
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

