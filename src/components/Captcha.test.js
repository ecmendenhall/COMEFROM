import React from "react";
import { shallow } from "enzyme";
import Card from "material-ui/Card";
import Captcha from "./Captcha";
import ImageGrid from "./ImageGrid";

it("renders an ImageGrid", () => {
  const captchaData = {
    type: "recognition",
    subject: "soldiers",
    imagePath: "./images/soldiers.jpg",
    width: 4
  };
  const captcha = shallow(<Captcha captcha={captchaData} />);
  expect(captcha.find(ImageGrid).length).toEqual(1);
});

it("renders a raised Card", () => {
  const captchaData = {
    type: "recognition",
    subject: "soldiers",
    imagePath: "./images/soldiers.jpg",
    width: 4
  };
  const captcha = shallow(<Captcha captcha={captchaData} />);
  expect(captcha.find(Card).prop("raised")).toEqual(true);
});
