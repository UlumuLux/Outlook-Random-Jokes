import { HTMLElements } from "../HTMLElements/HTMLElements";

export class API {
  private base_url: string = 'https://v2.jokeapi.dev/joke/';

  private buildRequestURL(): string {
    const language   = this.getLanguage();
    const categories = this.getCategories();
    const blFlags    = this.getBlacklistFlags();
    const searchText = this.getTextSearch();

    return `${this.base_url}${categories}${language}${blFlags}${searchText}`;
  }

  private getLanguage(): string {
    const language = HTMLElements.LANGUAGE_SELECT.value;

    if(language === 'en') {
      return '';
    }

    return `&lang=${language}`;
  }

  private getCategories(): string {
    if(HTMLElements.CATEGORIES_ANY_RADIO.checked) {
      return 'Any?';
    } 

    let categories = '';

    Array.from(HTMLElements.CATEGORIES_ARRAY).forEach(cat => {
      const category = cat as HTMLInputElement;

      if(category.checked) {
        if(categories !== '') {
          categories += `,${category.value}`;
        } else {
          categories += category.value;
        }
      }
    });

    return categories === '' ? 'Any?' : `${categories}?`;
  }

  private getBlacklistFlags(): string {
    let flags = '';

    Array.from(HTMLElements.BLACKLIST_FLAGS_ARRAY).forEach(flag => {
      const blFlag = flag as HTMLInputElement;

      if(blFlag.checked) {
        if(flags !== '') {
          flags += `,${blFlag.value}`;
        } else {
          flags += blFlag.value;
        }
      }
    });

    if(flags === '') {
      return flags;
    }

    return `&blacklistFlag=${flags}`;
  }

  private getTextSearch(): string {
    let search = HTMLElements.TEXT_SEARCH_INPUT.value;

    if(search !== '') {
      search = search.split(' ').join('%20');
      return `&contains=${search}`;
    }

    return search;
  }

  public async requestJoke(): Promise<any> {
    const URL = this.buildRequestURL();

    const JOKE = await fetch(URL);

    return new Promise((resolve, reject) => {
      if(JOKE.status !== 200) {
        reject(JOKE.status.toString());
      } else {
        resolve(JOKE.json());
      }
    });
  }
}