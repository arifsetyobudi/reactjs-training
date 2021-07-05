import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
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
