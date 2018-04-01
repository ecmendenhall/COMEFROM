import React, { Component } from 'react';

class ImageTile extends Component {
  render() {
    return (
      <img src={ this.props.image.dataURI } width={ this.props.image.width } height={ this.props.image.height } />
    );
  }
}

export default ImageTile;
