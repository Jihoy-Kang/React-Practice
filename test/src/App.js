import React, {useContext, useState} from 'react';
import './App.css';
import { Button,Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Data from "./data.js"
import Detail from './Detail';
import axios from 'axios';
import Cart from './cart.js'

import {Link, Route, Switch} from 'react-router-dom';

export let 재고context = React.createContext(); // 같은 변수값을 공유하는 범위를 생성

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12])
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">신발가게</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link>Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
      <Route exact path='/'>
        <div className="background">
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <div class="container">

            <재고context.Provider value={재고}>
              <div class="row">

                {
                  shoes.map((a,i)=>{
                    return <Product shoes={shoes[i]} key={i}/>
                  })
                }
              </div>
            </재고context.Provider>
            <button className='btn btn-primary' onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                console.log(result.data)
                shoes변경([...shoes,...result.data])
              })
              .catch(()=>{
                console.log('실패')
              })
            }}> 더보기</button>
          </div>
        </Route>
        <Route path='/detail/:id'>
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
          </재고context.Provider>
          <div>몰라</div>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  );
}

function Product(props){
    let itemId = props.shoes.id;
    let itemUrl = '/detail/' + itemId
    let 재고 = useContext(재고context);
  return(
    <div class="col-md-4">
      <Link to = {itemUrl}>
        <img src={props.shoes.url} width="100%"></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
        {재고}
      </Link>
    </div>
  )
}

function Test(){
  return <p>재고</p>
}

export default App;
