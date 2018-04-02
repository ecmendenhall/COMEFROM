import React, { Component } from 'react';
import GridList, { GridListTile } from 'material-ui/GridList';
import ImageTile from './ImageTile';

class ImageGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selections: new Array(this.props.cols * this.props.cols).fill(false)
    };
  }

  onClick(index, event) {
    const currentState = this.state.selections[index];
    const currentSelections = this.state.selections;
    const newState = !currentState;
    const newSelections = this.state.selections.slice(0);
    newSelections[index] = newState;
    this.setState({selections: newSelections});
  }

  renderImages() {
    return this.props.images.map(
      (image, index) => {
        return(
          <GridListTile key={ image.dataURI } onClick={ this.onClick.bind(this, index) } >
            <ImageTile image={ image } clicked={ this.state.selections[index] } />
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