import { getFilesWithLocales } from '../script-utils.mjs';
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
  })
});
