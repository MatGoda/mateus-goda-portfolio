import { selector } from 'recoil';
import { content, language } from '../atom';
 

//#region Language
export const languageSelector = selector({
  key: 'languageSelector',
  get: ({ get }) => {
    const state = get(language);
    return state;
  }
});
//#endregion

//#region Content
export const contentSelector = selector({
  key: 'contentSelector',
  get: ({ get }) => {
    const state = get(content);
    return state;
  }
});
//#endregion