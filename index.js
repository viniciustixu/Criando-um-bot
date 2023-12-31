const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


async function robo()  {
  const browser = await puppeteer.launch( {headless: 'new'});
  const page = await browser.newPage();

  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe uma moeda final: ') || 'real';
  const url = `https://www.google.com.br/search?q=${moedaBase}+para+${moedaFinal}&sca_esv=569794731&sxsrf=AM9HkKlAGjizu4zGM72sQR4nRi9v6SPG8Q%3A1696132524815&source=hp&ei=rO0YZfvTHqWb1sQPw7SC4AE&iflsig=AO6bgOgAAAAAZRj7vKlVmvh-zoUiQtrt4eh6axES3KLm&ved=0ahUKEwj72fWE-tOBAxWljZUCHUOaABwQ4dUDCAo&uact=5&oq=dolar+para+real&gs_lp=Egdnd3Mtd2l6Ig9kb2xhciBwYXJhIHJlYWwyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESJEMUABYjgtwAHgAkAEAmAGcAaABvwyqAQQwLjE0uAEDyAEA-AEBwgIHECMYigUYJ8ICBBAjGCfCAgsQABiABBixAxiDAcICCxAuGIAEGMcBGNEDwgIOEC4YgAQYsQMYxwEY0QPCAgoQABiKBRixAxhDwgIHEAAYigUYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgkQABiKBRgKGEPCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMB&sclient=gws-wiz`
  

  await page.goto(url);
  await page.screenshot({path: 'example.png'});
  
  const resultado = await page.evaluate(() => {
    return document.querySelector('.lWzCpb.a61j6').value
  })


  console.log(`O valor de ${moedaBase} em ${moedaFinal} é ${resultado}`);

  await browser.close();
}

robo();
