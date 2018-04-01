import React from 'react';
import { shallow } from 'enzyme';
import { GridListTile } from 'material-ui/GridList';
import CaptchaTile from './CaptchaTile';

it('renders an image', () => {
  const image = {
    dataURI: 'data:,Hello%2C%20World!',
    width: 120,
    height: 120
  }
  const tile = shallow(<CaptchaTile image={ image } />);
  expect(tile.find('img').length).toEqual(1);
});

it('uses dataURI as key', () => {
  const image = {
    dataURI: 'data:,Hello%2C%20World!',
    width: 120,
    height: 120
  }
  const tile = shallow(<CaptchaTile image={ image } />);
  expect(tile.find(GridListTile).key()).toEqual(image.dataURI);
});

it('sets image width', () => {
  const image = {
    dataURI: 'data:,Hello%2C%20World!',
    width: 120,
    height: 120
  }
  const tile = shallow(<CaptchaTile image={ image } />);
  expect(tile.find('img').prop('width')).toEqual(120);
});

it('sets image height', () => {
  const image = {
    dataURI: 'data:,Hello%2C%20World!',
    width: 120,
    height: 120
  }
  const tile = shallow(<CaptchaTile image={ image } />);
  expect(tile.find('img').prop('height')).toEqual(120);
});