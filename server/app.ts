import express, { Application, Request, Response } from 'express';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

import * as T from '@types';

class App {
  public application : Application;

  constructor() {
    this.application = express();
  }
}
const app = new App().application;
app.get('/api/search', async (req : Request, res : Response) => {
  const { text } = req.query;
  const vocas: T.Vocabulary[] = [];

  await Promise.all((text as string).split('\n').map((word) => getWordMean(word, vocas)));

  res.send(vocas);
});

const getWordMean = async (word: string, vocas: T.Vocabulary[]) => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(`https://dic.daum.net/search.do?q=${word}`);

  const content = await page.content();
  const $ = cheerio.load(content);
  const meanList = $('.cleanword_type .list_search > li');

  let means = '';
  meanList.each((index, mean) => {
    means += `${cheerio.load(mean).text()} `;
  });

  vocas.push({
    word,
    means,
  });

  browser.close();
};

app.listen(8081);
