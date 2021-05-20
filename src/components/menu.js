import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { Container, Row, Col, Collapse, Button } from 'reactstrap';

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="top-banner">

    <Container>
        <Row>
            <Col xs={12}>
                <Button color="info" onClick={toggle}>{isOpen ? <CloseIcon /> : <MenuIcon />}</Button>
            </Col>
        </Row>      

        <Collapse isOpen={isOpen}>
          <div id="menu">
              <h1>Settings</h1>
          </div>
        </Collapse>

      </Container>
    </div>
  );
};

export default Menu;
