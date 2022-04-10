import React, {useState} from 'react';
import './App.css';
import { Button,Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Data from "./data.js"
import Detail from './Detail';

import {Link, Route, Switch} from 'react-router-dom';
function App() {
  let [shoes, shoes변경] = useState(Data);
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
            <div class="row">

              {
                shoes.map((a,i)=>{
                  return <Product shoes={shoes[i]} key={i}/>
                })
              }
            </div>
          </div>
        </Route>
        <Route path='/detail/:id'>
          <Detail shoes={shoes}></Detail>
          <div>몰라</div>
        </Route>
      </Switch>
    </div>
  );
}

function Product(props){
    let itemId = props.shoes.id;
    let itemUrl = '/detail/' + itemId
  return(
    <div class="col-md-4">
      <Link to = {itemUrl}>
        <img src={props.shoes.url} width="100%"></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </div>
  )
}

export default App;
