import imageToSlices from "image-to-slices";

const referenceLines = (imageWidth, numSquares) => {
  const squareWidth = imageWidth / numSquares;
  const numLines = numSquares - 1;
  let lines = [];
  let line = squareWidth;
  for (let i = 0; i < numLines; i++) {
    lines.push(line);
    line += squareWidth;
  }
  return lines;
};

const sliceImage = (imagePath, imageWidth, squares, callback) => {
  const lines = referenceLines(imageWidth, squares);
  const image = require(`${imagePath}`);
  imageToSlices(image, lines, lines, { saveToDataUrl: true }, callback);
};

export { sliceImage as default, referenceLines };
