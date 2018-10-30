import React from "react";
import { shallow } from "enzyme";
import GridList, { GridListTile } from "material-ui/GridList";
import ImageGrid from "./ImageGrid";
import ImageTile from "./ImageTile";

it("renders an ImageTile for each image", () => {
  const images = [
    {
      dataURI: "data:,Hello%2C%20World!",
      width: 120,
      height: 120
    }
  ];
  const tile = shallow(<ImageGrid images={images} cols={1} />);
  expect(tile.find(ImageTile).length).toEqual(1);
});

it("uses dataURI as imageTile key", () => {
  const images = [
    {
      dataURI: "data:,Hello%2C%20World!",
      width: 120,
      height: 120
    }
  ];
  const tile = shallow(<ImageGrid images={images} cols={1} />);
  expect(tile.find(GridListTile).key()).toEqual(images[0].dataURI);
});

it("sets GridList columns to specified count", () => {
  const tile = shallow(<ImageGrid images={[{}]} cols={4} />);
  expect(
    tile
      .find(GridList)
      .shallow()
      .prop("cols")
  ).toEqual(4);
});

it("sets image clicked onClick", () => {
  const images = [
    {
      dataURI: "data:,Hello%2C%20World!",
      width: 120,
      height: 120
    }
  ];
  const grid = shallow(<ImageGrid images={images} cols={4} />);
  grid
    .find(GridListTile)
    .first()
    .simulate("click");
  expect(grid.state("selections")[0]).toEqual(true);
});
