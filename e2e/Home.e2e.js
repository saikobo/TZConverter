const detox = require('detox');
const {device, element} = detox;

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should load without crashing', async () => {
    await expect(element(by.text('Get Time Zone'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('latitude-input')).typeText('40.689247');
    await element(by.id('longitude-input')).typeText('-74.044502');
    await element(by.id('submit-button')).tap();
    await expect(element(by.id('time-value'))).toBeVisible();
  });

});
