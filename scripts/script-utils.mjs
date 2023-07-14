import { readdirSync } from 'node:fs';
import path from 'node:path';

export const defaultLocale = "es";
export const supportedLocales = ["es", "pt", "jp"];

export const getFilesWithLocales = (dir, locales) => {
  const dirents = readdirSync(dir, { withFileTypes: true });
  let filesWithExt = [];
  dirents.forEach((dirent) => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      filesWithExt.push(...getFilesWithLocales(fullPath, locales));
    } else {
      filesWithExt.push(dirent.name); 
    }
  });
  const filepaths = filesWithExt.map(filepath => path.join(dir, filepath))
  // return filepaths.filter((filepath) => filepath.endsWith(langExt));
  const regexLocaleMD = new RegExp(`\.(${locales.join('|')})\.md`);
  return filepaths.filter((filepath) => filepath.match(regexLocaleMD));
}
