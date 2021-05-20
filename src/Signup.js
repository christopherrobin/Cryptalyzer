import React from "react";
import { Container, Row, Col } from "reactstrap";

import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Bitcoin from './media/bitcoin.svg';
import Eth from './media/eth.svg';

import Fade from "./components/Fade";
import './components/Fade.scss';

// import './components/Signup.scss';

const Signup = () => {
  return (
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

                <form id="user-signup-form" noValidate autoComplete="off">
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
                    <Col xs={12} style={{ textAlign: "right" }}>
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
  );
};

export default Signup;
