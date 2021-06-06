import React from "react";
import { Container, Row, Col } from "reactstrap";

const header = ({pageTitle}) => {
  return (
    <Container style={{ marginTop: '2em' }}>
      <Row>
        <Col xs={12}>
          <h1>Cryptalyzer</h1>
          <h2>{pageTitle}</h2>
          <hr />
          </Col>
      </Row>
    </Container>
  );
};

export default header;
