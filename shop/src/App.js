import React, {useState} from 'react';
import { Button, Navbar, Nav, NavDropdown,Form, FormControl, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom'


function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState(10, 11, 12)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
      <Switch> {/* route중 하나만 열수 있는 기능 */}
        <Route exact path="/">
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
          <div className="container">
            <div className="row">

              {
                shoes.map((a,i)=>{
                  return <Product shoes={shoes[i]} key={i} />
                })
              }

            </div>
            <button className="btn btn-primary" onClick={()=>{


              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                shoes변경([...shoes, ...result.data]); //각 배열을 넣을 수 있는 방법
                
                
              })
              .catch(()=>{
                console.log("실패")
              })
            }}>더보기</button>
            <div className="row">
            
              
            </div>
            

          </div>
        </Route>
        <Route path="/detail/:id"> {/* :id파라미터 */}
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
        </Route>
        <Route path="/:id">
              <div>아무거나</div>
        </Route>
        
        {/* <Route path="/asdf" component={Modal}></Route> */}
      </Switch>

    </div>
  );
}

function Product(props){
  let id = props.shoes.id
  let url = "/detail/"+id
  return(
    <div className="col-md-4">
      <Link to={url}>
        <img src={props.shoes.url} width="100%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </div>
    )
}


export default App;
