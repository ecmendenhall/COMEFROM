import loadCaptcha from './load-captcha';

it('loads a captcha', () => {
  const captcha = loadCaptcha(0);
  expect(captcha.type).toEqual("recognition");
  expect(captcha.subject).toEqual("soldiers");
  expect(captcha.imagePath).toEqual("./images/soldiers.jpg");
  expect(captcha.width).toEqual(4);
});