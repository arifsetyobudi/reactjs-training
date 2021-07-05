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
import Login from './login';
import LoginRoute from './routes/LoginRoute';
import Logout from './Logout';
import ProtectedRoute from './routes/ProtectedRoute';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount() {
    this.setState({ isAuthenticated: this.isAuthenticated() })
  }

  getTimeIn = () => {
    const timeNow = new Date().getTime();
    return parseFloat((timeNow + 1) / 1000).toFixed(0);
  };

  isAuthenticated = () => {
    const expiresIn = localStorage.getItem("expiresIn");
    if (expiresIn) {
      if (expiresIn < this.getTimeIn()) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            {this.state.isAuthenticated &&
              <React.Fragment>
                <Col>
                  <Link to="/" >Home</Link>
                </Col>
                <Col>
                  <Link to="/about" >About</Link>
                </Col>
                <Col>
                  <Link to="/contact" >Contact Us</Link></Col>
                <Col>
                  <Link to="/items" >Item List</Link>
                </Col>
                <Col>
                  <Link to="/items2" >Item List - Functional</Link>
                </Col>
                <Col>
                  <Link to="/logout" >Logout</Link>
                </Col>
              </React.Fragment>
            }
          </Row>
          <Row>
            <Col>
              <Switch>
                {/* <ProtectedRoute
                  isAuthenticated={this.state.isAuthenticated}
                  exact
                  path="/"
                  component={Home}
                /> */}
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about/:id">
                  <About />
                </Route>
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
                <Route exact path="/login">
                  <Login />
                </Route>
                {/* <LoginRoute
                  isAuthenticated={this.state.isAuthenticated}
                  exact path="/login"
                  component={Login}>
                </LoginRoute> */}
                <Route exact path="/logout">
                  <Logout />
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
}

export default App;
