import React from "react";
import { shallow } from "enzyme";
import Typography from "material-ui/Typography";
import CaptchaCopy from "./CaptchaCopy";

it("constructs directions from captcha data", () => {
  const captcha = {
    type: "recognition",
    subject: "bananas"
  };
  const copy = shallow(<CaptchaCopy captcha={captcha} />);
  const directions = copy
    .find(Typography)
    .first()
    .render();
  expect(directions.text()).toEqual("Select all squares with bananas.");
});
