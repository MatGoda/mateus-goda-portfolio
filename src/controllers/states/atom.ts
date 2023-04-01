import { atom } from 'recoil';
import ptbr from '../languages/pt-br';
import Content from '../../models/Content';

//#region Language
export const language = atom({
  key: 'language',
  default: 'pt-br'
});
//#endregion

//#region Content
export const content = atom({
  key: 'content',
  default: new Content()
});
//#endregion
