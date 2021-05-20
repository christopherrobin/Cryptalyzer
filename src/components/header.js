import React, { useState, setState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "./menu";

const header = () => {
  return (
    <div id="loaded">
      <div id="top-banner">
        <Row>
          <Col xs={12}>
            <Menu />
          </Col>
          <Col xs={8}>
{
/*               <a
              alt=""
              href="http://github.com/christopherrobin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <br />
              Github
            </a>
            <a
              alt=""
              href="https://www.linkedin.com/in/christopherrr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "1em" }}
            >
              <LinkedInIcon />
              <br />
              LinkedIn
            </a> */
}
          </Col>
        </Row>
        <Row>
          <Col xs={12} id="sub-menu">
            <Menu />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default header;
