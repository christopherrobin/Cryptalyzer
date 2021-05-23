import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { getCookie } from './CookieWork';
import { map } from 'lodash';

const Step3 = (props) => {

    const [data, setData] = useState({});

    useEffect(() => {
        // console.log(getCookie('cryptalyzer-coinbase-token'));
        // console.log(getCookie('cryptalyzer-coinbase-refresh-token'));
        const coinbaseToken = getCookie('cryptalyzer-coinbase-token');
        const authHeader = `Bearer ${coinbaseToken}`;
        console.log(authHeader);

        let myHeaders = new Headers();
        myHeaders.append("Authorization", authHeader);
        var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow'};

        fetch("https://api.coinbase.com/v2/user", requestOptions)
            .then(
                function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    setData(data.data);
                });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }, [])

    console.log(data);

    return (
        <div id="user-signup-form">
            <Row>
                <Col xs={12}>
                    {
                        data ?
                        <div style={{ textAlign: 'center' }}>
                            <img src={data.avatar_url} alt="avatar" style={{ border: '1px solid black'}} /><br />
                            <h2>Welcome, {data.name}!</h2>
                            <p>Your user id is <code>{data.id}</code></p>
                        </div>
                        : null
                    }
                </Col>
            </Row>
        </div>
    )
};

export default Step3;
