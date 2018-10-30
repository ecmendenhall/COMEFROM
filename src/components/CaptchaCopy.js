import React, { Component } from "react";
import Typography from "material-ui/Typography";

class CaptchaCopy extends Component {
  render() {
    return (
      <div>
        <Typography variant="headline">
          Select all squares with <strong>{this.props.captcha.subject}</strong>.
        </Typography>
        <Typography variant="subheading">
          If there are none, click skip.
        </Typography>
      </div>
    );
  }
}

export default CaptchaCopy;
