import { Injectable } from '@nestjs/common';
import { launch } from 'puppeteer';
import { WebPageDetails } from './types';

@Injectable()
export class BrowserService {
  private readonly browser: ReturnType<typeof launch>;

  constructor() {
    this.browser = launch();
  }

  async getWebPageDetails(url: string): Promise<WebPageDetails> {
    const tab = await (await this.browser).newPage();
    await tab.goto(url, { waitUntil: 'networkidle0' });
    const title = await tab.title();

    return {
      title: title || null,
    };
  }
}
