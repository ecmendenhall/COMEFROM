import React, { Component } from 'react';

import Captcha from './Captcha';

class CaptchaContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.load = this.load.bind(this);
  }

  componentWillMount() {
    this.load();
  }

  load() {
    this.props.load((captchaData) => {
      this.setState({captchaData: captchaData});
    });
  }

  render() {
    if (this.state.captchaData) {
      return <Captcha captcha={ this.state.captchaData } load={ this.load } />;
    } else {
      return null;
    }
  }

}

export default CaptchaContainer;