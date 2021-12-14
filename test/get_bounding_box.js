const pw = require('playwright');

(async () => {
  const browser = await pw.chromium.launch({
    headless: true
    //executablePath: '/usr/bin/chromium'
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://sozysozbot.github.io/chrome-rendering-bug-poc/index.html');
  //await page.screenshot({ path: 'example.png' });
  const d = page.locator('div').last().boundingBox();
  console.log(await d);
  //await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
