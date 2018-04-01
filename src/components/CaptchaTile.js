import React, { Component } from 'react';
import { GridListTile } from 'material-ui/GridList'

class CaptchaTile extends Component {
  render() {
    return (
      <GridListTile key={ this.props.image.dataURI }>
        <img src={ this.props.image.dataURI } width={ this.props.image.width } height={ this.props.image.height } />
      </GridListTile>
    );
  }
}

export default CaptchaTile;
