import React, { Component } from "react";
import loadCaptcha from "./load-captcha";
import Captcha from "./components/Captcha";
import styled from "styled-components";

const Container = styled.div`
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    let captchaData = loadCaptcha(Math.round(Math.random() * 2));
    return (
      <Container>
        <Captcha captcha={captchaData} />
      </Container>
    );
  }
}

export default App;
