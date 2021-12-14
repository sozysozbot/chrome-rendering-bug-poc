const puppeteer = require('puppeteer');

async function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/usr/bin/chromium'
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
  await page.goto('https://sozysozbot.github.io/chrome-rendering-bug-poc/index.html');

  // この時点ではバグってる
  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  // 何故かここで正気に戻る
  await page.screenshot({ path: 'example.png', fullPage: false, omitBackground: true });

  await sleep(50000);

  await browser.close();
})();
