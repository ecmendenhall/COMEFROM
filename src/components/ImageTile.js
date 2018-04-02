import React, { Component } from 'react';
import CheckIcon from 'material-ui-icons/Check';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${ props => props.image.width + 5 }px;
  height: ${ props => props.image.height + 5 }px;
  margin-left: auto;
  margin-right: auto;
`;

const IconContainer = styled.div`
  display: ${ props => props.clicked ? "inline-block" : "none" };
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #3F51B5;
  border-radius: 30px;

  svg {
  	fill: white;
  	font-size: 30px;
  }
 `;

class ImageTile extends Component {

  width() {
  	const modifier = this.props.clicked ? 20 : 0;
  	return this.props.image.width - modifier;
  }

  height() {
  	const modifier = this.props.clicked ? 20 : 0;
  	return this.props.image.height - modifier;
  }

  render() {
    return (
      <ImageContainer image={ this.props.image } >
        <IconContainer clicked={ this.props.clicked } >
          <CheckIcon />
        </IconContainer>
        <img src={ this.props.image.dataURI } width={ this.width() } height={ this.height() } />
      </ImageContainer>
    );
  }
}

export default ImageTile;
