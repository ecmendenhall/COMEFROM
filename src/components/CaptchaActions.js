import React, { Component } from "react";

import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import RefreshIcon from "material-ui-icons/Refresh";
import InfoOutlineIcon from "material-ui-icons/InfoOutline";

import styled from "styled-components";

const ButtonContainer = styled.span`
  margin-left: auto;
`;

class CaptchaActions extends Component {
  render() {
    return (
      <React.Fragment>
        <span>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <InfoOutlineIcon />
          </IconButton>
        </span>
        <ButtonContainer>
          <Button variant="raised" color="primary" size="large">
            Skip
          </Button>
        </ButtonContainer>
      </React.Fragment>
    );
  }
}

export default CaptchaActions;
