import React, { Component } from 'react';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import RefreshIcon from 'material-ui-icons/Refresh';
import InfoOutlineIcon from 'material-ui-icons/InfoOutline';

import styled from 'styled-components';

class CaptchaActions extends Component {

  render() {
    return (
      <div>
        <span>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <InfoOutlineIcon />
          </IconButton>
        </span>
        <span>
          <Button variant="raised" color="primary">
            Skip
          </Button>
        </span>
      </div>
      );
    }
  }

  export default CaptchaActions;