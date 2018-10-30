import { referenceLines } from "./slice-image";

it("calculates reference lines based on width", () => {
  let lines = referenceLines(600, 1);
  expect(lines).toEqual([]);

  lines = referenceLines(600, 2);
  expect(lines).toEqual([300]);

  lines = referenceLines(600, 3);
  expect(lines).toEqual([200, 400]);

  lines = referenceLines(600, 4);
  expect(lines).toEqual([150, 300, 450]);

  lines = referenceLines(600, 5);
  expect(lines).toEqual([120, 240, 360, 480]);

  lines = referenceLines(600, 6);
  expect(lines).toEqual([100, 200, 300, 400, 500]);

  lines = referenceLines(400, 2);
  expect(lines).toEqual([200]);

  lines = referenceLines(1200, 4);
  expect(lines).toEqual([300, 600, 900]);
});
