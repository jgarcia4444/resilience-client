import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

import './App.css';


import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import OurTeam from './components/OurTeam';

class App extends Component {

  render() {
    return (
      <Container fluid className="App">
        <Router>
        <Nav />
          <Switch>
            <Route path="/about">
              <OurTeam />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
