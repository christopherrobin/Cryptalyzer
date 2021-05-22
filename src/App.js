import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {Helmet} from 'react-helmet';
import { get } from 'lodash';
import { Container } from "reactstrap";
import Signup from './Signup';
import CoinbaseAuth from './CoinbaseAuth';
// import Spinner from './components/Spinner';
// import Menu from "./components/menu2";

import "./App.scss";
import './components/Fade.scss';

import queryString from 'query-string';

const App = () => {
  const coinbaseCode = get(queryString.parse(window.location.search), 'code', false);
  // console.log(`%c${coinbaseCode}`, 'background: #222; color: #bada55; padding: 1em; width: 100%;');
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
          </Switch>
        </Router>

        <div id="footer">
          &copy; 2021&nbsp;
          <a href="http://www.spaceyyy.com/" target="_blank" rel="noreferrer">
            spaceyyy
          </a>&nbsp;
          / made with&nbsp;
          <svg
            color="#ff6b6b"
            xmlns="http://www.w3.org/2000/svg"
            width=".9em"
            height=".9em"
            fill="#ff9f9f"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            &nbsp;
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          &nbsp;in Indianapolis
        </div>

      </div>
    </Container>
  );
};

export default App;
