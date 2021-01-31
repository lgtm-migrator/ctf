export function stub() {
  let doubleInvocation = false;

  beforeEach(() => {
    if (browser.ctfHarness) {
      doubleInvocation = true;
    } else {
      browser.ctfHarness = true;
    }
  });

  beforeEach(() => {
    if (doubleInvocation) {
      return;
    }

    Object.assign(browser, {
      runtime: {
        getPlatformInfo: jest.fn().mockResolvedValue({}),
        onMessage: { addListener: jest.fn() },
      },
      tabs: {
        onUpdated: { addListener: jest.fn() },
        onRemoved: { addListener: jest.fn() },
      },
      webRequest: {
        onCompleted: { addListener: jest.fn() },
      },

      pageAction: {},
    });
  });

  afterEach(() => {
    if (doubleInvocation) {
      return;
    }

    browser.ctfHarness = undefined;
  });

  return browser;
}
