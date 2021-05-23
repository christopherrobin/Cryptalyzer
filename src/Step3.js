import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { getCookie } from './CookieWork';

const Step3 = (props) => {

    useEffect(() => {
        console.log(getCookie('cryptalyzer-coinbase-token'));
    }, [])

    return (
        <div id="user-signup-form">
            <Row>
                <Col xs={12}>
                    <em>step 3</em>
                </Col>
            </Row>
        </div>
    )
};

export default Step3;
