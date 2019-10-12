class CypressChainer {
  constructor({ browser, context }) {
    this.browser = browser;
    this.context = context;
  }

  async visit(url) {
    await this.browser.url(url);

    return this;
  }

  async get(selector, options) {
    const finalOptions = {
      timeout: 5000,
      ...options,
    };

    this.context = await this.browser.$(selector);
    this.context.waitForExist(finalOptions.timeout);

    return this;
  }

  async should(assertName) {
    switch (assertName) {
      case 'be.visible':
        {
          const isVisible = this.context.isDisplayed();
          assert(isVisible === true);
        }
        break;
    }

    return this;
  }

  async and(...args) {
    return this.should(...args);
  }

  async click() {
    await this.context.click();

    return this;
  }
}

module.exports = CypressChainer;
