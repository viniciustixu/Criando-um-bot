const puppeteer = require('puppeteer');


async function robo()  {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch( {headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://twitter.com/');
  await page.screenshot({path: 'example.png'});
  console.log('ok');

  await browser.close();
}

robo();
/* TODO:
Continuar o vídeo minuto: 6:13
https://www.youtube.com/watch?v=4W55nFDyIrc */