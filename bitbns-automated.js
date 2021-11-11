const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://bitbns.com/trade/#/login/');

  await page.waitForSelector(`#login__email`);
  await page.type(`#login__email`, process.env.EMAIL, { delay: 10 });
  await page.type(`#login__pass`, process.env.PASSWORD, { delay: 10 });

 await page.click('[id="loginnext"]'); 

 //waiting for login for 40 sec
 await page.waitForTimeout(40000)
 await page.goto('https://bitbns.com/trade/#/matic');
})();