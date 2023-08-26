// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Pagina interraciones', () => {

  const sortOptions = { asc: 'asc', desc: 'desc'};
  const liSelector = '#root > ul > li';

  const getItempropValues = async (page, property) => {
    const liElements = await page.$$(liSelector);
    const values = await Promise.all(liElements.map(async li => {
      const value = await li.$eval(`[itemprop=${property}]`, (el) => el.textContent);
      return value;
    }));
    return values;
  };

  const getDataIds = (elements) => Promise.all(elements.map(async (el) => await el.getAttribute('data-id')));  

  const getSortOptions = async (page) => {
    const selectSortEl = await page.getByTestId('select-sort')
    let sortByProperty = await selectSortEl.getAttribute('name'); 
    const sortOrderEl = await page.$('[name="sort-order"]');

    if (!sortOrderEl) { // simple sort UI with just one type of sort
      const sortOrder = await selectSortEl.getAttribute('value');
      return { 
        selectSortEl,
        sortByProperty,
        sortOrderEl: selectSortEl,
        sortOrder
      };
    }

    const sortOrder = await sortOrderEl.getAttribute('value');
    sortByProperty = await selectSortEl.getAttribute('name');
    return { 
      selectSortEl,
      sortByProperty, 
      sortOrderEl,
      sortOrder
    }
  }

  const selectSortOrder = async (sortOrderEl, orderOption) => {
    try {
      await sortOrderEl.selectOption(orderOption);
    } catch(errSelect) {
      try {
        await sortOrderEl.check(orderOption);
      } catch(errCheck) {
        throw new Error(`No se puede seleccionar el orden ${orderOption} en el elemento ${sortOrderEl},
          error select: ${errSelect}, error check: ${errCheck}`);
      }
    }
  };

  test.describe('sort', () => {

    let sortOrderEl, sortByProperty;
  
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
      ({ sortOrderEl, sortByProperty } = await getSortOptions(page));
    });

    test('de ascendente "asc" a descendente "desc"', async ({ page }) => {
      // await sortOrderEl.selectOption(sortOptions.asc);
      await selectSortOrder(sortOrderEl,sortOptions.asc); 
      const sortedValuesAsc = await getItempropValues(page, sortByProperty);

      await selectSortOrder(sortOrderEl,sortOptions.desc);
      //await sortOrderEl.selectOption(sortOptions.desc);
      const sortedValuesDesc = await getItempropValues(page, sortByProperty);

      expect(sortedValuesDesc).toEqual(sortedValuesAsc.reverse());
    });

    test('de descendente "desc" a ascendente "asc"', async ({ page }) => {
      await selectSortOrder(sortOrderEl,sortOptions.desc);
      const sortedValuesDesc = await getItempropValues(page, sortByProperty);

      // await sortOrderEl.selectOption(sortOptions.asc);
      await selectSortOrder(sortOrderEl,sortOptions.asc);
      const sortedValuesAsc = await getItempropValues(page, sortByProperty);

      expect(sortedValuesAsc).toEqual(sortedValuesDesc.reverse());
    });
  });

  test.describe('filter', () => {

    let selectFilter;

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
      selectFilter = await page.getByTestId('select-filter');
    });

    test(`cuando elige un filter a otro los resultados se cambian`, async ({ page }) => {
      await selectFilter.selectOption({ index: 1 });
      const originalLis = await page.$$(liSelector);
      const originalIds = await getDataIds(originalLis);

      await selectFilter.selectOption({ index: 2 });
      const currentLis = await page.$$(liSelector);
      const currentIds = await getDataIds(currentLis)
      expect(originalIds).not.toEqual(currentIds);
    });
  });

  test.describe('sort + filter', () => {

    let sortOrderEl, sortByProperty, selectFilter;

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');

      selectFilter = await page.getByTestId('select-filter');
      ({ sortOrderEl, sortByProperty } = await getSortOptions(page));
    });

    test('cuando elige un filtro y un sort, los resultados son afectado de ambos', async ({ page }) => {
      await selectFilter.selectOption({ index: 1 });

      // sacamos los valores de propiedad en el orden que ocurre en la pagina
      // sin sort
      const valuesNoSorted = await getItempropValues(page, sortByProperty);  

      await selectSortOrder(sortOrderEl,sortOptions.asc);
      const valuesSortedAsc = await getItempropValues(page, sortByProperty);
  
      // await sortOrderEl.selectOption(sortOptions.desc);
      await selectSortOrder(sortOrderEl,sortOptions.desc);
      const valuesSortedDesc = await getItempropValues(page, sortByProperty);

      expect(valuesSortedAsc).toEqual([...valuesNoSorted].sort());
      expect(valuesSortedDesc).toEqual([...valuesNoSorted].sort().reverse());
    });

    test('el button "button-clear" limpia los filtros y sort, volvemos a los resultados original', async ({ page }) => {
      await page.goto('http://localhost:3000/');
      const originalLis = await page.$$(liSelector);
      const select = await page.getByTestId('select-filter');
      await select.selectOption({ index: 1 });
      const liElements = await page.$$(liSelector);
      expect(liElements.length).not.toEqual(originalLis.length); // probar si no hay mismo cantidad elementos

      const buttonReset = await page.getByTestId('button-clear');
      await buttonReset.click();
      const clearLiElements = await page.$$(liSelector);
      expect(clearLiElements.length).toEqual(originalLis.length);
    });
  });
});
