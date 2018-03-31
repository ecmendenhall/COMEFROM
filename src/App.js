import React, { Component } from 'react';
import MUICssBaseline from 'material-ui/CssBaseline';
import MUITypography from 'material-ui/Typography';
import MUIGrid from 'material-ui/Grid';
import MUICard from 'material-ui/Card';

import Checkbox from './components/Checkbox';
import ImageGrid from './components/ImageGrid';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MUICssBaseline />
        <MUITypography>
        <MUIGrid container spacing={ 24 } direction="row" justify="center" alignItems="center">
          <MUIGrid item xs={ 5 } justify="center">
              <ImageGrid />
          </MUIGrid>
        </MUIGrid>
        </MUITypography>
      </React.Fragment>
    );
  }
}

export default App;
