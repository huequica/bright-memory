import { Injectable } from '@nestjs/common';
import { launch, Page } from 'puppeteer';
import * as cheerio from 'cheerio';
import { WebPageDetails } from './types';

@Injectable()
export class BrowserService {
  async getWebPageDetails(url: string): Promise<WebPageDetails> {
    const browser = await launch();
    const tab = await browser.newPage();

    await tab.goto(url, { waitUntil: 'networkidle0' });
    const title = await tab.title();
    const { image } = await this.getOGPDetails(tab);

    await browser.close();
    return {
      title: title || null,
      ogpImageLink: image || null,
    };
  }

  private async getOGPDetails(tab: Page): Promise<{ image: string }> {
    const html = await tab.content();
    const $ = cheerio.load(html);

    const image = $('meta[property="og:image"]').attr('content');

    return {
      image,
    };
  }
}
