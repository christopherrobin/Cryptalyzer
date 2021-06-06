import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {Helmet} from 'react-helmet';
import { get } from 'lodash';
import { Container } from "reactstrap";
import Footer from './components/Footer';
import Signup from './Signup';
import Dashboard from './Dashboard';
import CoinbaseAuth from './CoinbaseAuth';

import "./App.scss";
import './components/Fade.scss';

import queryString from 'query-string';

const App = () => {
  const coinbaseCode = get(queryString.parse(window.location.search), 'code', false);

  const handleSubmit = () => console.log('handleSubmit from App.js');

  return (
    <Container id="app-container">
      <Helmet>
        <style>{"body { background-color: #F3F3F3; }"}</style>
      </Helmet>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/hello" />
            </Route>

            <Route path="/hello">
              <Signup coinbaseCode={coinbaseCode || false} />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/sync">
              <CoinbaseAuth
                handleSubmit={()=>handleSubmit}
                coinbaseCode='12345'
              />
            </Route>
          </Switch>
        </Router>

      <Footer />

      </div>
    </Container>
  );
};

export default App;
