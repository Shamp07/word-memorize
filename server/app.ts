import express, { Application, Request, Response } from 'express';
import cheerio from 'cheerio';

import * as T from '@types';
import axios from 'axios';

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

  process.setMaxListeners(100);
  await Promise.all((text as string).split('\n').map((word) => getWordMean(word, vocas)));

  res.send(vocas);
});

const getWordMean = async (keyword: string, vocas: T.Vocabulary[]) => {
  const result = await axios.get(`https://dic.daum.net/search.do?q=${keyword}`);
  const $ = cheerio.load(result.data);
  const word = $('.search_cleanword > strong > a > span').text();
  const meanList = $('.cleanword_type .list_search > li');

  let means = '';
  meanList.each((index, mean) => {
    means += `${cheerio.load(mean).text()} `;
  });

  vocas.push({
    word,
    means,
  });
};

app.listen(8081);
