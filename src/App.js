import React, { Component } from 'react';
import { loadRandomCaptcha } from './load-captcha';
import CaptchaContainer from './components/CaptchaContainer';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (<Container><CaptchaContainer load={ loadRandomCaptcha } /></Container>);
  }
}

export default App;
