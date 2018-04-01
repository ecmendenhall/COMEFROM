import React, { Component } from 'react';
import GridList, { GridListTile } from 'material-ui/GridList';
import ImageTile from './ImageTile';

class ImageGrid extends Component {

  renderImages() {
    return this.props.images.map(
      (image) => {
        return(
          <GridListTile key={ image.dataURI }>
            <ImageTile image={ image } />
          </GridListTile>
        );
      }
    );
  }

  render() {
    return <GridList spacing={ 0 } cols={ this.props.cols } cellHeight="auto" >{ this.renderImages() }</GridList>;
  }
}

export default ImageGrid;