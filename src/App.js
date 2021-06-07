import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { get } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/PageHeader';
import Footer from './components/Footer';
import Signup from './Signup';
import Dashboard from './Dashboard';
import CoinbaseAuth from './CoinbaseAuth';
import Fade from './components/Fade';

import './App.scss';
import './components/Fade.scss';

import queryString from 'query-string';

const App = () => {
  const coinbaseCode = get(queryString.parse(window.location.search), 'code', false);

  const handleSubmit = () => console.log('handleSubmit from App.js');

  return (
    <Container id="app-container">
      <Helmet>
      <title>Cryptalyzer - Hello!</title>
        <style>{'body { background-color: #F3F3F3; }'}</style>
        <link rel="canonical" href="https://Cryptalyzer.com/hello" />
        <meta name="description" content="Cryptalyzer" />
      </Helmet>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/hello" />
            </Route>

            <Route path="/hello">
              <Signup coinbaseCode={coinbaseCode || false} />
              <Footer />
            </Route>

            <Route path="/dashboard">
              <Fade
                childComponent={<Dashboard />}
              />
            </Route>

            <Route path="/sync">
              <Header pageTitle="Sync" />
              <Container>
              <Row>
                <Col xs={12}>
                  <Helmet>
                      <title>Cryptalyzer - Sync</title>
                      <link rel="canonical" href="https://Cryptalyzer.com/sync" />
                      <meta name="description" content="Sync With Coinbase" />
                  </Helmet>
                  <CoinbaseAuth
                    handleSubmit={()=>handleSubmit}
                  />
                  </Col>
                </Row>
                <Footer />
              </Container>
              <Footer />
            </Route>
          </Switch>
        </Router>

      </div>
    </Container>
  );
};

export default App;
