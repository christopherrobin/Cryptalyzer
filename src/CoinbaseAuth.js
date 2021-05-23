import React, { useEffect } from "react";
import { get } from 'lodash';
import { Row, Col } from "reactstrap";
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import './Spinner.scss';

const CoinbaseAuth = (props) => {
    const { handleSubmit, coinbaseCode } = props;
    const connectToCoinbase = () => window.location.replace('https://www.coinbase.com/oauth/authorize?client_id=b15a8f09ba059b65e41be40e61f0fa4ccf64d965538d886e11d0946eb59a17d1&redirect_uri=https%3A%2F%2Fwww.cryptalyzer.com%2Fhello&response_type=code&scope=wallet%3Auser%3Aread');

    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cf_bm=129606ad9687effb18287759964a9262e3e22da3-1621714317-1800-AUImc3ODIsnDvoEDgRsJhOcSwHg7zjPLn+hDySV48raVjzFJlFZssuF4iWPvTsbNUAhSr7n/mEySfz+VGOOpQJU=; amplitude_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6; coinbase_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6");

        var formdata = new FormData();
        formdata.append("grant_type", "authorization_code");
        formdata.append("code", coinbaseCode);
        formdata.append("client_id", "b15a8f09ba059b65e41be40e61f0fa4ccf64d965538d886e11d0946eb59a17d1");
        formdata.append("client_secret", "f6d6e442eea4960d0b236644ac474d0e9e7cecc3d984b31268eca1ba9696b027");
        formdata.append("redirect_uri", "https://www.cryptalyzer.com/hello");
        formdata.append("enablePKCE", "false");
        formdata.append("scopes", "[\"wallet:user:read\"]");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        if (coinbaseCode) {
            fetch("https://api.coinbase.com/oauth/token", requestOptions)
                .then(response => console.log(response.text()))
                // .then(result => console.log(get(result, 'access_token', false)))
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }

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
