import { getFilesWithLocales, 
  getLearningObjectiveHeadings,
  getLearningObjectiveHierarchy,
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
    it('should return an object with top level categories as keys, ex. java, js', () => {

    });
    it('should return an object with values that are arrays subcategories of its keys, ex { js: js/data-types, js/functions }', () => {
      
    });
    it('should return an object with value of empty array for a key with no subcategories, ex { html: [] }', () => {
      
    });
  });

  describe('getLearningObjectivesHeadings', () => {
    it('', () => {});
  });

  describe('createLearningObjectivesMarkdown', () => {
    it('', () => {});
  })

});
