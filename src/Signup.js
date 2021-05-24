import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CoinbaseAuth from './CoinbaseAuth';
import Step3 from './Step3';
import { getCookie } from './CookieWork';

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

import './Signup.scss';

const Signup = (props) => {
  const { coinbaseCode } = props;

  const intialStep = () => {
    let result;
    if (!coinbaseCode && !getCookie('cryptalyzer-coinbase-token')) {
      result = 1;
    } else if (coinbaseCode && !getCookie('cryptalyzer-coinbase-token')){
      result = 2;
    } else if (getCookie('cryptalyzer-coinbase-token')){
      result = 3;
    }
    return result;
  }

  const [step, setStep] = useState(intialStep);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
      // event.preventDefault();
      // This will submit and create user account?
      console.log(
        `
        ${firstName}
        ${lastName}
        ${email}
        `
      );
      setStep(step + 1);
  }

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
                  <h2 className="green-text">maximize your moves</h2>
                  {/**<p>step: {step}</p> */}
                </CardContent>
                <CardActions id="funnel-menu" style={{ justifyContent: "center" }}>
                  <Button
                    size="large"
                    disableElevation
                    disabled={step !== 1}
                    className={step === 1 ? 'active-item' : null}
                  >
                    Enter Details
                  </Button>
                  <Button disableElevation size="large" disabled={step !== 2} className={step === 2 ? 'active-item' : null}>
                    Sync Coinbase
                  </Button>
                  <Button disableElevation size="large" disabled={step !== 3} className={step === 3 ? 'active-item' : null}>
                    Cryptalize <sup>&#174;</sup>
                  </Button>
                  <Button disableElevation size="large" disabled={step !== 4} className={step === 4 ? 'active-item' : null}>
                    Profit
                  </Button>
                </CardActions>

                {
                  step === 1 ?
                <form id="user-signup-form" onSubmit={handleSubmit} autoComplete="off">
                  <Row>
                    <Col xs={6}>
                      <TextField
                        id="signup-first"
                        label="First Name"
                        type="text"
                        onInput={ e=>setFirstName(e.target.value)}
                        fullWidth
                      />
                    </Col>
                    <Col xs={6}>
                      <TextField
                        id="signup-last"
                        label="Last Name"
                        type="text"
                        onInput={ e=>setLastName(e.target.value)}
                        fullWidth
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <TextField
                        id="signup-email"
                        label="Email*"
                        type="email"
                        color="primary"
                        onInput={ e=>setEmail(e.target.value)}
                        fullWidth
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} style={{ textAlign: "right" }}>
                      <Button
                        type="submit"
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
                : null
                }


                {
                step === 2 ?
                <Fade childComponent={
                  <CoinbaseAuth
                    handleSubmit={handleSubmit}
                    coinbaseCode={coinbaseCode}
                  />
                } />
                :null
                }


                {
                  step === 3 ?
                 <Fade childComponent={<Step3 />} /> : null
                }




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
