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

/**
 *
 * @param {array} learningObjectives
 * @returns {object} an object with keys of top level categories and values of subcategory arrays ex. { 'js': ['js/testing', ...]}
 */
export const getLearningObjectivesHierarchy = (learningObjectives) => learningObjectives.reduce(
  (memo, { id }) => {
    const [root, ...parts] = id.split('/');
    if (!memo[root]) {
      Object.assign(memo, { [root]: [] })
    }
    const subcatKeys = parts.slice(0, -1).reduce((acc, part, i, arr) =>
      [...acc, `${root}/${arr.slice(0, i + 1).join('/')}`], []);
    subcatKeys.forEach(subcat => !memo[root].includes(subcat) && memo[root].push(subcat));
    return memo;
  },
  {},
);

const getNearestSubcategoryParent = (objectiveKey) => objectiveKey.split('/').slice(0, -1).join('/');

/**
 *
 * @param {object} categoryTree an object rep of hierarchy of categories and subcats, as returned in getLearningObjecttivesHierarchy
 * @param {object} intl localized objectives content
 * @returns {object} key is category/subcat, value is heading with intl string and heading level ex. { 'js/testing': '#### Testing' }
 */
export const getLearningObjectivesHeadings = (categoryTree, intl) => Object.keys(categoryTree).reduce(
  (memo, rootCategoryKey) => {
    const localizedCat = intl[rootCategoryKey] || {};
    const subcats = categoryTree[rootCategoryKey];

    return {
      ...memo,
      [rootCategoryKey]: [`### ${localizedCat.title || intl[rootCategoryKey] || rootCategoryKey}\n`],
      ...subcats.reduce((acc, subcatKey, i) => {
        const localized = intl[subcatKey];
        const title = localized?.title || intl[subcatKey] || subcatKey;

        const depth = subcatKey.split('/').length;
        const headingLevel = depth + 2; // the objectives start at level 3
        const nearestParent = getNearestSubcategoryParent(subcatKey);
        // Note: this suffix is to help understand the hierarchy of the deeper objectives in the readme
        const subcatSuffix = (depth > 2) ? ` _(${(intl[nearestParent]?.title || intl[nearestParent] || nearestParent)})_` : '';
        const subheading = `${'#'.repeat(headingLevel)} ${title}${subcatSuffix}\n`
        return ({ ...acc, [subcatKey]: [subheading] })
      }, {})
    }
  },
  {},
);

const linkToString = ({ title, url }, lang) => {
  const uiUrl = 'https://curriculum.laboratoria.la';
  return `[${title}](${url.startsWith('topics/') ? `${uiUrl}/${lang}/${url}` : url})`
};

export const createLearningObjectivesMarkdown = (learningObjectives, sectionTree, intl, lang) => {
  learningObjectives.forEach(({ id }) => {
    const item = intl[id] || {};
    const title = item.title || id.split('/').slice(1).join('/');
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
    const [rootCategory, ...parts] = id.split('/');
    if (parts.length === 1) { // we are just one level under the root cat
      sectionTree[rootCategory].push(markup);
    } else {
      const nearestParent = getNearestSubcategoryParent(id);
      sectionTree[nearestParent].push(markup);
    }
  });

  return Object.values(sectionTree).map(text => text.join('')).join('\n');
}
