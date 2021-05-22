import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import './Spinner.scss';

const CoinbaseAuth = (props) => {
    const { handleSubmit, coinbaseCode } = props;
    const connectToCoinbase = () => window.location.replace('https://www.coinbase.com/oauth/authorize?client_id=b15a8f09ba059b65e41be40e61f0fa4ccf64d965538d886e11d0946eb59a17d1&redirect_uri=https%3A%2F%2Fwww.cryptalyzer.com%2Fhello&response_type=code&scope=wallet%3Auser%3Aread');

useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `grant_type=authorization_code&code=${coinbaseCode}&client_id=b15a8f09ba059b65e41be40e61f0fa4ccf64d965538d886e11d0946eb59a17d1&client_secret=f6d6e442eea4960d0b236644ac474d0e9e7cecc3d984b31268eca1ba9696b027&redirect_uri=https://cryptalyzer.com/oauth/callback`
    };
    if(coinbaseCode) {
    fetch('https://api.coinbase.com/oauth/token', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div id="user-signup-form">
        <Row>
            <Col xs={12}>
                <Button disabled={!!coinbaseCode} style={{ margin: '2em 0' }} fullWidth color="primary" disableElevation variant="contained" onClick={() => connectToCoinbase()}>Connect to Coinbase</Button>
            </Col>
        </Row>
        <Row>
            <Col xs={12} style={{ textAlign: 'right' }}>
                <Button
                    // type="submit"
                    onClick={() => handleSubmit()}
                    variant="contained"
                    color="primary"
                    id="confirm-step2"
                    disabled={!coinbaseCode}
                    disableElevation
                >
                    <strong>Next</strong> <NavigateNextIcon />
                </Button>
            </Col>
        </Row>
    </div>
  );
};

export default CoinbaseAuth;
