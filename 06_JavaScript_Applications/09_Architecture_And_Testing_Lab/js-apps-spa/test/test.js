const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const options = { headless: false, slowMo: 200 };
const url = 'http://127.0.0.1:5500';

describe('custom test', function () {
    this.timeout(6000);
    it('should work', async function () {
        const browser = await chromium.launch(options);
        const page = await browser.newPage();

        await page.goto(url);

        await page.click('text=login');
        await page.fill('input[name=email]' , 'peter@abv.bg');
        await page.fill('input[name=password]' , '123456');
        await page.click('input[value=Login]');


        //await browser.close();

        expect(true).to.be.true;
    });

});