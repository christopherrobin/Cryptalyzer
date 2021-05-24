import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { getCookie } from "./CookieWork";
// import { refreshToken } from "./FetchWork";

import Fade from "./components/Fade";

const Step3 = props => {
  const [data, setData] = useState({});

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
          console.error(
            `Unknown resolvable issue encountered, status Code: ${response.status}`
          );
          return;
        }

        if (response.status === 401) {
          console.error("You have an invalid token from Coinbase.");
          // const freshAuthToken = refreshToken();
          // console.log(freshAuthToken);
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
          setData(data.data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, []);

  return (
    <div id="user-signup-form">
      <Row>
        <Col xs={12}>
          {data.name ? (
            <Fade
              childComponent={
                <div style={{ textAlign: "center" }}>
                <div>
                  <img
                    src={data.avatar_url}
                    alt="avatar"
                    style={{ border: "1px solid black" }}
                  />
                  </div>
                  <p>Welcome, {data.name}!</p>
                  <p>
                    Your user id is <code>{data.id}</code>
                  </p>
                </div>
              }
            />
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default Step3;
