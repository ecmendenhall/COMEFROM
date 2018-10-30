import React, { Component } from "react";
import ImageToSlices from "image-to-slices";
import MUICard, {
  CardHeader as MUICardHeader,
  CardContent as MUICardContent,
  CardActions as MUICardActions
} from "material-ui/Card";
import MUIGridList, {
  GridListTile as MUIGridListTile
} from "material-ui/GridList";
import MUITypography from "material-ui/Typography";
import soldiers from "../images/soldiers.jpg";
import styled from "styled-components";
import MUIButton from "material-ui/Button";
import MUIIconButton from "material-ui/IconButton";
import MUIRefreshIcon from "material-ui-icons/Refresh";
import MUIHeadSetIcon from "material-ui-icons/Headset";
import MUIInfoOutlineIcon from "material-ui-icons/InfoOutline";

const getImages = (imagePath, callback) => {
  ImageToSlices(
    imagePath,
    [120, 240, 360, 480],
    [120, 240, 360, 480],
    { saveToDataUrl: true },
    callback
  );
};

const Container = styled.div`
  width: 625px;
  max-width: 625px;
  min-width: 625px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getImages(soldiers, images => {
      console.log(images);
      this.setState({ images: images });
    });
  }

  renderImages() {
    if (this.state.images) {
      return this.state.images.map(img => {
        return (
          <MUIGridListTile key={img.dataURI}>
            <img src={img.dataURI} width={120} height={120} />
          </MUIGridListTile>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <MUICard raised={true}>
        <Container>
          <MUIGridList cols={5} cellHeight={120}>
            <MUIGridListTile key="description" cols={5}>
              <MUITypography variant="headline">
                Select all squares with <strong>soldiers</strong>.
              </MUITypography>
              <MUITypography variant="subheading">
                If there are none, click skip.
              </MUITypography>
            </MUIGridListTile>
            {this.renderImages()}
            <MUIGridListTile key="description" cols={5}>
              <MUICardActions>
                <MUIIconButton>
                  <MUIRefreshIcon />
                </MUIIconButton>
                <MUIIconButton>
                  <MUIHeadSetIcon />
                </MUIIconButton>
                <MUIIconButton>
                  <MUIInfoOutlineIcon />
                </MUIIconButton>
                <MUIButton variant="raised" color="primary">
                  Skip
                </MUIButton>
              </MUICardActions>
            </MUIGridListTile>
          </MUIGridList>
        </Container>
      </MUICard>
    );
  }
}

export default ImageGrid;
