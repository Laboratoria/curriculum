
export const getRemainingLocalizedFiles = (dir, locales) => {
  const dirents = readdirSync(dir, { withFileTypes: true });
  let filesWithExt = [];
  dirents.forEach((x) => {
    const fullPath = path.join(dir, x.name);
    if (x.isDirectory()) {
      filesWithExt.push(...getRemainingLocalizedFiles(fullPath));
    } else {
      filesWithExt.push(x.name); 
    }
  });
  const filepaths = filesWithExt.map(filepath => path.join(dir, filepath))
  const regexLocaleMD = new RegExp(`\.(${supportedLocales.join('|')})\.md`);
  return filepaths.filter((filepath) => filepath.match(regexLocaleMD));
}

export const getFilesWithLocales = (dir, locales) => {
  const dirents = readdirSync(dir, { withFileTypes: true });
  let filesWithExt = [];
  dirents.forEach((x) => {
    const fullPath = path.join(dir, x.name);
    if (x.isDirectory()) {
      filesWithExt.push(...getFilesWithLocales(fullPath, locales));
    } else {
      filesWithExt.push(x.name); 
    }
  });
  const filepaths = filesWithExt.map(filepath => path.join(dir, filepath))
  // return filepaths.filter((filepath) => filepath.endsWith(langExt));
  const regexLocaleMD = new RegExp(`\.(${supportedLocales.join('|')})\.md`);
  return filepaths.filter((filepath) => filepath.match(regexLocaleMD));
}
