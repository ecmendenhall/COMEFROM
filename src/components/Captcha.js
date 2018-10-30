import React, { Component } from "react";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import ImageGrid from "./ImageGrid";
import CaptchaCopy from "./CaptchaCopy";
import CaptchaActions from "./CaptchaActions";
import sliceImage from "../slice-image";

class Captcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.loadImages = this.loadImages.bind(this);
  }

  componentDidMount() {
    sliceImage(
      this.props.captcha.imagePath,
      600,
      this.props.captcha.width,
      this.loadImages
    );
  }

  loadImages(images) {
    this.setState({ images: images });
  }

  render() {
    return (
      <Card raised={true}>
        <CardContent>
          <CaptchaCopy captcha={this.props.captcha} />
          <ImageGrid
            cols={this.props.captcha.width}
            images={this.state.images}
          />
        </CardContent>
        <CardActions>
          <CaptchaActions />
        </CardActions>
      </Card>
    );
  }
}

export default Captcha;
