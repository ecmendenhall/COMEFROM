import React, { Component } from 'react';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import ImageGrid from './ImageGrid';
import CaptchaCopy from './CaptchaCopy';
import CaptchaActions from './CaptchaActions';
import sliceImage from '../slice-image';

class Captcha extends Component {

  render() {
    return (
      <Card raised={ true }>
        <CardContent>
          <CaptchaCopy captcha={ this.props.captcha } />
          <ImageGrid cols={ this.props.captcha.width } images={ this.props.captcha.images } />
        </CardContent>
        <CardActions>
          <CaptchaActions load={ this.props.load } />
        </CardActions>
      </Card>
      );
    }

  }

  export default Captcha;