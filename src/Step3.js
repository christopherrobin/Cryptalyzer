import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { get } from 'lodash';
import { getCookie } from "./CookieWork";
import { nukeUserCookies } from "./FetchWork";
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
// import { refreshToken } from "./FetchWork";

import Fade from "./components/Fade";

const Step3 = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const coinbaseToken = getCookie("cryptalyzer-coinbase-token");
    const authHeader = `Bearer ${coinbaseToken}`;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", authHeader);
    myHeaders.append("CB-VERSION", "2021-05-24");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://api.coinbase.com/v2/user", requestOptions)
      .then(function (response) {
        if (response.status !== 200 && response.status !== 401) {
          console.error(`Unknown resolvable issue encountered, status Code: ${response.status}`);
          setError(true);
          return;
        }

        if (response.status === 401) {
          console.error("You have an invalid token from Coinbase.");
          setError(true);
          // TODO: Refresh auth using the refresh token we got from CB in the original call
          // const freshAuthToken = refreshToken();
          // console.log(freshAuthToken);
        }

        // Examine the text in the response
        response.json().then(function (data) {
          setData(data.data);
          setLoading(false);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });

  }, []);

  return (
    <div id="Step3-Container">
      <Row>
        <Col xs={12}>
          {
            (get(data, 'name', false) && !loading && !error) ? (
              <Fade
                childComponent={
                  <div style={{ textAlign: "center" }}>
                  <div style={{ marginBottom: '1em' }}>
                    <img
                      src={data.avatar_url}
                      alt="avatar"
                      style={{ border: "1px solid black" }}
                    />
                    </div>
                    <h3>Welcome, {data.name}!</h3>
                    <p>
                      Your user id is <code>{data.id}</code>
                    </p>
                    <Button disableElevation variant="contained" color="primary" style={{ margin: '1em 0' }}>
                      <Link to="/dashboard">Continue to your dashboard</Link>
                    </Button>
                  </div>
                }
              />
            ) : null
          }
          {
            error ? <div><Alert style={{ marginBottom: '1em' }} severity="error">There was an error retrieving your Coinbase user Information.</Alert><Button variant="contained" color="primary" disableElevation fullWidth onClick={() => nukeUserCookies()}>authorize Coinbase again</Button></div> : null
          }
        </Col>
      </Row>
    </div>
  );
};

export default Step3;
