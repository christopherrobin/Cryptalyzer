import React, { useState, useEffect } from "react";
// import { Container, Button, Alert } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import './Fade.scss';

const Fade = (props) => {
  // const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);
  }, []);

  return (
    <div>
      <CSSTransition
        in={showMessage}
        timeout={800}
        classNames="fade"
        unmountOnExit
      >
        {props.childComponent}
      </CSSTransition>
    </div>
  );
};

export default Fade;
