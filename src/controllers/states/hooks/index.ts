import { useRecoilState } from 'recoil';
import { content, language } from '../atom';

//#region Language
export function useLanguage() {
  return useRecoilState(language);
}
//#endregion

//#region Content
export function useContent() {
  return useRecoilState(content);
}
//#endregion
