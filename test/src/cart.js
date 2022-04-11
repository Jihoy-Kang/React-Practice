import React from 'react'
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux'
function Cart(props){
    return(
        <div>
            <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>

                </tr>
                </thead>
                <tbody>
                    {
                    props.state.map((a,i)=>{
                        return(
                            <tr key={i} >
                                <td>i</td>
                                <td>{ a.name }</td>
                                <td>{a.quan }</td>
                                <td>{a.name }</td>
                                <td>
                                    <button onClick={()=>{props.dispatch({type : '수량증가', payload : {name : 'kim'}})}}>+</button>
                                    <button onClick={()=>{props.dispatch({type : '수량감소'})}}>-</button>
                                </td>
                            </tr>
                        )
                    })
                    }


                </tbody>
            </Table>
            { props.alert열렸니 === true
            ?   <div className="my-alert3">
                    <p>지금구매하면 신규할인20%</p>
                    <button onClick={()=>{props.dispatch({type : 'alert닫기'})}}>닫기</button>
                </div>
            : null
            }

            </div>
        </div>
    )
}

function state를props화(state){
    return {
        /* 상품명 : state[0].name */
        state : state.reducer,
        alert열렸니 : state.reducer2
    }
}

export default connect(state를props화)(Cart)

/* export default Cart */