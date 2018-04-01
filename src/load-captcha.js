import captchaData from './data/captchas.json';

const loadCaptcha = (index) => {
	return captchaData.captchas[index];
}

export { loadCaptcha as default };