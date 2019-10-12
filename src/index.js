const Chainer = require('./cypress-chainer');

module.exports = Object.freeze({
  createAdapter({
    browser = new Error('Browser instance of webdriver.io is required'),
  }) {
    return new Chainer({
      browser,
      context: null,
    });
  },
});
