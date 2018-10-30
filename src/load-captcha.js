import captchaData from './data/captchas.json';
import sliceImage from './slice-image';

export const loadRandomCaptcha = (onLoad) => {
  const index = Math.round(Math.random() * (captchaData.captchas.length - 1));
	loadCaptcha(index, onLoad);
}

const loadCaptcha = (index, onLoad) => {
	const captcha = captchaData.captchas[index];
  const onImageLoad = (images) => {
    captcha.images = images;
    onLoad(captcha);
  }
  sliceImage(
    captcha.imagePath,
    600,
    captcha.width,
    onImageLoad
  );
}

export { loadCaptcha as default };