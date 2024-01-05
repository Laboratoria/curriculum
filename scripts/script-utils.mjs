import { readdirSync } from 'node:fs';
import path from 'node:path';

export const defaultLocale = 'es';
export const supportedLocales = ['es', 'pt'];

export const getFilesWithLocales = (dir, locales) => {
  const dirents = readdirSync(dir, { withFileTypes: true });
  const filesWithExt = dirents.reduce((accumFiles, dirent) => {
    const fullPath = path.resolve(dir, dirent.name);
    dirent.isDirectory() ? accumFiles.push(...getFilesWithLocales(fullPath, locales)) : accumFiles.push(fullPath); 
    return accumFiles;
  }, []);
  const regexLocaleMD = new RegExp(`\.(${locales.join('|')})\.md`);
  return filesWithExt.filter((filepath) => filepath.match(regexLocaleMD));
}

export const getLearningObjectiveHierarchy = (learningObjectives) => learningObjectives.reduce(
  (memo, item) => {
    const [ root, ...parts] = item.split('/');
    const result = { ...memo };
    if (!result[root]) {
      Object.assign(result, { [root]: [] })
    } 
    const subcats = parts.slice(0, -1).reduce((acc, part, i, arr) =>
      [...acc, `${root}/${arr.slice(0, i + 1).join('/')}`], []);
      /* js/testing/async => js/testing */
      /* java/spring-framework/core-concepts/beans => java/spring-framework, java/spring-framework/core-concepts */
    subcats.forEach(subcat => !result[root].includes(subcat) && result[root].push(subcat));
    return result;
  },
  {},
);

export const getLearningObjectiveHeadings = (categoryTree, intl) => Object.keys(categoryTree).reduce(
  (memo, rootCategoryKey) => {
    const localizedCat = intl[rootCategoryKey] || {};
    const subcats = categoryTree[rootCategoryKey];

    return {
      ...memo,
      [rootCategoryKey]: [`### ${localizedCat.title || intl[catKey] || catKey}\n`],
      ...subcats.reduce((acc, subcatKey, i) => {
        const localized = intl[subcatKey];
        const title = localized?.title || intl[subcatKey] || subcatKey;

        const headingLevel = subcatKey.split('/').length + 2;
        const [ rootCategory, ...parts ] = subcatKey.split('/');
        let subcatSuffix = '';
        if (parts.length > 1) {
          // Note: this suffic is to help understand the hierarchy in the readme
          const nearestParent = [rootCategory, ...parts.slice(0, -1)].join('/');
          subcatSuffix = ` _(${(intl[nearestParent]?.title || intl[nearestParent] || nearestParent)})_`;
        }
        const subheading = `${'#'.repeat(headingLevel)} ${title}${subcatSuffix}\n`
        return ({...acc, [subcatKey]: [subheading]})
      } , {})}
    },
  {},
);

const linkToString = ({ title, url }, lang) => {
  const uiUrl = 'https://curriculum.laboratoria.la';
  return `[${title}](${url.startsWith('topics/') ? `${uiUrl}/${lang}/${url}` : url})`
};

export const createLearningObjectivesMarkdown = (learningObjectives, sectionTree, intl, lang) => {
  learningObjectives.forEach((objectiveKey) => {
    const item = intl[objectiveKey] || {};
    const title = item.title || objectiveKey.split('/').slice(1).join('/');
    let markup;
    if (!item.links || !item.links.length) {
      markup = `\n- [ ] **${title}**\n`;
    } else {
       // collapsible links
      const detailsStart = '<details><summary>Links</summary><p>\n';
      const detailsEnd = '\n</p></details>\n';
      markup = (item.links.reduce((prev, link) => `${prev}\n  * ${linkToString(link, lang)}`, 
        `\n- [ ] **${title}**\n\n  ${detailsStart}`) 
      ) + detailsEnd;
    }
   
    // find out where to put the markup
    const [ rootCategory, ...parts ] = objectiveKey.split('/');
    if (parts.length === 1) { // we are just one level under the root cat
      sectionTree[rootCategory].push(markup);
    } else {
      const nearestParent = [rootCategory, ...parts.slice(0, -1)].join('/');
      sectionTree[nearestParent].push(markup);
    }
  });

  return Object.values(sectionTree).map(text => text.join('')).join('\n');
}
