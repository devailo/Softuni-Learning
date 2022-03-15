const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

describe('Tests', async function () {
    this.timeout(6000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        page.close();
    });

    it('works', async () => {
        await new Promise(r => setTimeout(r, 2000))
        expect(1).to.equal(1);
    })
})