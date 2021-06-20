import express from 'express';
import puppeteer from 'puppeteer';

class App {
  public application : express.Application;

  constructor() {
    this.application = express();
  }
}
const app = new App().application;
app.get('/api/search', (req : express.Request, res : express.Response) => {
  (async () => {
    // 브라우저를 실행한다.
    // 옵션으로 headless모드를 끌 수 있다.
    const browser = await puppeteer.launch({
      headless: false,
    });

    // 새로운 페이지를 연다.
    const page = await browser.newPage();
    // 페이지의 크기를 설정한다.
    await page.setViewport({
      width: 1366,
      height: 768,
    });
    // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
    await page.goto('https://www.goodchoice.kr/product/search/2');
  })();

  res.send('start');
});

app.listen(8081, () => console.log('start'));
