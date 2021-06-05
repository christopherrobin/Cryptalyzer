import React, { useEffect } from "react";
import { ENV_CONFIG } from './env-variables';
import { Row, Col } from "reactstrap";
import { setCookie } from './CookieWork';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const CoinbaseAuth = ({handleSubmit, coinbaseCode}) => {
    const connectToCoinbase = () => window.location.replace('https://www.coinbase.com/oauth/authorize?client_id=b15a8f09ba059b65e41be40e61f0fa4ccf64d965538d886e11d0946eb59a17d1&redirect_uri=https%3A%2F%2Fwww.cryptalyzer.com%2Fhello&response_type=code&scope=wallet%3Auser%3Aread');
    const userHasCoinbaseCookie = document.cookie.match(/^(.*;)?\s*cryptalyzer-coinbase-refresh-token\s*=\s*[^;]+(.*)?$/);

    useEffect((coinbaseCode) => {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "__cf_bm=129606ad9687effb18287759964a9262e3e22da3-1621714317-1800-AUImc3ODIsnDvoEDgRsJhOcSwHg7zjPLn+hDySV48raVjzFJlFZssuF4iWPvTsbNUAhSr7n/mEySfz+VGOOpQJU=; amplitude_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6; coinbase_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6");

        const formdata = new FormData();
        formdata.append("grant_type", "authorization_code");
        formdata.append("code", coinbaseCode);
        formdata.append("client_id", ENV_CONFIG.coinbaseClientId);
        formdata.append("client_secret", ENV_CONFIG.coinbaseSecret);
        formdata.append("redirect_uri", "https://www.cryptalyzer.com/hello");
        formdata.append("enablePKCE", "false");
        formdata.append("scopes", "[\"wallet:user:read\"]");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        if (coinbaseCode) {
            fetch("https://api.coinbase.com/oauth/token", requestOptions)
                .then(
                    function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {
                        setCookie('cryptalyzer-coinbase-token', data.access_token);
                        setCookie('cryptalyzer-coinbase-refresh-token', data.refresh_token);
                    });
                    }
                )
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });
        }

    }, []);

  return (
    <div id="user-signup-form">
        <Row>
            <Col xs={12}>
                { userHasCoinbaseCookie ? <Alert severity="success">You're connected with Coinbase and ready to go!</Alert> : null }
                <Button disabled={userHasCoinbaseCookie} style={{ margin: '2em 0' }} fullWidth color="primary" disableElevation variant="contained" onClick={() => connectToCoinbase()}>
                 Connect to Coinbase
                </Button>
            </Col>
        </Row>
    </div>
  );
};

export default CoinbaseAuth;
