import { readdirSync } from 'node:fs';
import path from 'node:path';

export const defaultLocale = "es";
export const supportedLocales = ["es", "pt"];

export const getFilesWithLocales = (dir, locales) => {
  const dirents = readdirSync(dir, { withFileTypes: true });
  const filesWithExt = dirents.reduce((accumFiles, dirent) => {
    const fullPath = path.join(dir, dirent.name);
    dirent.isDirectory() ? accumFiles.push(...getFilesWithLocales(fullPath, locales)) : accumFiles.push(fullPath); 
    return accumFiles;
  }, []);
  const regexLocaleMD = new RegExp(`\.(${locales.join('|')})\.md`);
  return filesWithExt.filter((filepath) => filepath.match(regexLocaleMD));
}
