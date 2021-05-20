import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import {Helmet} from 'react-helmet';
import { Container, Row, Col, Spinner } from "reactstrap";
// import Menu from "./components/menu2";

import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Bitcoin from './media/bitcoin.svg';
import Eth from './media/eth.svg';

// Animations
import Fade from "./components/Fade";
import "./App.scss";
import './components/Fade.scss';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  console.log(isLoading);

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
              <Container>
                <Row>
                  <Col xs={12}>
                    <Fade
                      childComponent={
                        <div>
                          <Card variant="outlined" id="login-card">
                            <CardContent>
                              <h1>Cryptalyzer &#128640;</h1>
                              <h2>maximize your moves</h2>
                            </CardContent>
                            <CardActions style={{ justifyContent: "center" }}>
                              <Button
                                size="large"
                                variant="contained"
                                // color="primary"
                                disableElevation
                              >
                                Enter Details
                              </Button>
                              <Button size="large" disabled>
                                Sync Coinbase
                              </Button>
                              <Button size="large" disabled>
                                Cryptalize <sup>&#174;</sup>
                              </Button>
                              <Button size="large" disabled>
                                Profit
                              </Button>
                            </CardActions>

                            <form
                              id="user-signup-form"
                              noValidate
                              autoComplete="off"
                            >
                              <Row>
                                <Col xs={6}>
                                  <TextField
                                    id="signup-first"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                  />
                                </Col>
                                <Col xs={6}>
                                  <TextField
                                    id="signup-last"
                                    label="Last Name"
                                    type="text"
                                    fullWidth
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12}>
                                  <TextField
                                    id="signup-email"
                                    label="Email"
                                    type="email"
                                    color="primary"
                                    fullWidth
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} style={{ textAlign: 'right' }}>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    id="confirm-step1"
                                    disableElevation
                                  >
                                    <strong>Next</strong> <NavigateNextIcon />
                                  </Button>
                                </Col>
                              </Row>
                            </form>

                            <hr />
                            <div
                              style={{
                                width: "9em",
                                textAlign: "center",
                                margin: "auto"
                              }}
                            >
                              <div>
                                <img
                                  src={Eth}
                                  style={{ width: "3em", height: "3em" }}
                                  alt="Etehreum Accepted Here"
                                />
                                <img
                                  src={Bitcoin}
                                  style={{ width: "3em", height: "3em" }}
                                  alt="Bitcoin Accepted Here"
                                />
                              </div>
                              <div className="caption">accepted here</div>
                            </div>
                          </Card>
                        </div>
                      }
                    />
                  </Col>
                </Row>
              </Container>
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
