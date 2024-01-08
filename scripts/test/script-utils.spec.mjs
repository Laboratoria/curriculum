import { getFilesWithLocales, 
  getLearningObjectivesHeadings,
  getLearningObjectivesHierarchy,
  createLearningObjectivesMarkdown
} from '../script-utils.mjs';
import { existsSync } from 'fs';
import { assert } from 'chai';

describe('script utils', () => {
  
  describe('getFilesWithLocale', () => {
    it('should return all files with .pt.md when locale is pt', () => {
      const filesPt = getFilesWithLocales('scripts/test/fixtures/project-with-localized-docs', ['pt']);
      assert.equal(filesPt.length, 2);
      assert.equal(filesPt.filter(f => !f.endsWith('.pt.md')).length, 0);
    });
    it('should return filepaths that exist for nested directories', () => { // we don't support japanese yet, but what if
      const filesPt = getFilesWithLocales('scripts/test/fixtures/project-with-localized-docs', ['pt']);
      filesPt.forEach(filepath => {
        assert.isTrue(existsSync(filepath));
      })
    });
    it('should return all files with supported locales jp, pt', () => { // we don't support japanese yet, but what if
      const filesPtJp = getFilesWithLocales('scripts/test/fixtures/project-with-localized-docs', ['jp', 'pt']);
      assert.equal(filesPtJp.length, 3);
      assert.equal(filesPtJp.filter(f => !(f.endsWith('.pt.md') || f.endsWith('.jp.md'))).length, 0);
    });
  });

  describe('getLearningObjectivesHierarchy', () => {
    it('should return an object with top level categories as keys', () => {
      const hierarchy = getLearningObjectivesHierarchy(['js/testing/unit', 'js/testing/mocks', 'css/selectors', 'html/semantics']);
      assert.deepEqual(Object.keys(hierarchy), ['js', 'css', 'html']);
    });
    it('should return an object with values of arrays of subcategories for the individual objectives', () => {
      const hierarchy = getLearningObjectivesHierarchy(['js/testing/unit', 'js/testing/async', 'css/selectors', 'browser/dom/events']);
      const result = { 'js': ['js/testing'], 'css': [], 'browser': ['browser/dom'] };
      assert.deepEqual(hierarchy, result);
    });
    it('should return category keys whose value is an empty array for objectives with no subcategories', () => {
      const hierarchy = getLearningObjectivesHierarchy(['css/selectors', 'css/flexbox', 'html/semantics']);
      assert.deepEqual(hierarchy, { 'css': [], 'html': [] });
    });
  });

  describe('getLearningObjectivesHeadings', () => {
    it('should return an object whose keys are categories and subcategories', () => {
      const headings = getLearningObjectivesHeadings({ 'js': ['js/testing'], 'css': [], 'html': [] }, {});
      assert.deepEqual(Object.keys(headings), ['js', 'js/testing', 'css', 'html']);
    });
    it('should return an object whose first array element is a markdown strings to be used as heading', () => {
      const headings = getLearningObjectivesHeadings({ 'js': ['js/testing'], 'css': [], 'html': [] }, {});
      assert.equal(typeof headings['js/testing'][0], 'string');
      assert.equal(typeof headings['css'][0], 'string');
    });
    it('should return values of markdown headings with proper depth (h3, h4 etc)', () => {
      const headings = getLearningObjectivesHeadings({ 'java': ['java/data-types', 'java/spring-framework/core-concepts'] }, {});
      assert(headings['java'][0].startsWith('### '), 'is a string with h3');
      assert(headings['java/data-types'][0].startsWith('#### '), 'is a string with h4');
      assert(headings['java/spring-framework/core-concepts'][0].startsWith('##### '), 'is a string with h5');
    });
  });

  describe.only('createLearningObjectivesMarkdown', () => {
    it('should return a string that contains the headings', () => {
      const objectives = ['js/testing/unit', 'js/testing/async', 'css/selectors', 'browser/dom/events'];
      const categoryTree = getLearningObjectivesHierarchy(objectives);
      const sectionTree = getLearningObjectivesHeadings(categoryTree, {});
      const markdown = createLearningObjectivesMarkdown(objectives,
        sectionTree,
        {},
        'es');
      assert.equal(typeof markdown, 'string');
      Object.values(sectionTree).forEach(heading => {
        assert(markdown.includes(heading[0]), 'markdown includes heading');
      });
    });
  })

});
