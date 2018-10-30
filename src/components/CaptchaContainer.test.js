import React from 'react';
import { shallow } from 'enzyme';

import CaptchaContainer from './CaptchaContainer';
import Captcha from './Captcha';

it('loads captcha data on mount', () => {
  const captchaData = {
    "type": "recognition", 
    "subject": "soldiers",
    "imagePath": "./images/soldiers.jpg",
    "width": 5
  };
  const loadStub = () => {
    return captchaData;
  };
  const container = shallow(<CaptchaContainer load={ loadStub } />);
  expect(container.state('captchaData')).toBe(captchaData);
});

it('reloads captcha data', () => {
  const loadSpy = jest.fn();
  const container = shallow(<CaptchaContainer load={ loadSpy } />);
  container.instance().load();
  expect(loadSpy.mock.calls.length).toBe(2);
});

it('passes load as a prop to its child Captcha', () => {
  const loadSpy = jest.fn();
  loadSpy.mockReturnValue({});
  const container = shallow(<CaptchaContainer load={ loadSpy } />);
  const captcha = container.find(Captcha);
  captcha.props().load();
  expect(loadSpy).toBeCalled();
});