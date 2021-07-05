import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import ItemCreate from './ItemCreate';
import ItemCreate2 from './ItemCreate2';
import ItemDetail from './ItemDetail';
import ItemDetail2 from './ItemDetail2';
import ItemList from './ItemList';
import ItemList2 from './ItemList2';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <Link to="/" >Home</Link>
            {/* <a href="/" >Home</a> */}
          </Col>
          <Col>
            <Link to="/about" >About</Link>
          </Col>
          {/* <Col>
            <Link to="/about/test" >About Test</Link>
          </Col> */}
          <Col>
            <Link to="/contact" >Contact Us</Link></Col>
          <Col>
            <Link to="/items" >Item List</Link>
          </Col>
          <Col>
            <Link to="/items2" >Item List - Functional</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about/:id">
                <About />
              </Route>
              {/* <Route path="/about(/:id)(/:number)">
                <About />
              </Route> */}
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact/:param">
                <ContactUs />
              </Route>
              <Route path="/contact">
                <ContactUs />
              </Route>
              <Route exact path="/items">
                <ItemList />
              </Route>
              <Route path="/items/create">
                <ItemCreate />
              </Route>
              <Route exact path="/items/:id">
                <ItemDetail />
              </Route>              
              <Route exact path="/items2">
                <ItemList2 />
              </Route>
              <Route path="/items2/create">
                <ItemCreate2 />
              </Route>
              <Route exact path="/items2/:id">
                <ItemDetail2 />
              </Route>              
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col>This is footer</Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
