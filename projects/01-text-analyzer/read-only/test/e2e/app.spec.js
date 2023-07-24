import { test, expect } from '@playwright/test';

const TEST_TEXT_EMPTY = '';
const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const TEST_TEXT_NUMBERS = 'Si tengo 8 manzanas y compro 2 más, ¿cúantas manzanas tengo en total?';
const TEST_TEXT_DECIMALS = 'Calcular la suma de 1.65 más 0.15 y más 1.10';
const TEST_TEXT_NOT_A_NUMBER = 'Esto no es un número: 41u0003jot';

test.describe('Para un texto con sólo palábras:', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const textarea = await page.locator('textarea[name="user-input"]');
    await textarea.click();
    await textarea.type(TEST_TEXT_NO_NUMBERS);
  });

  test('Caracteres: 123', async ({ page }) => {
    await expect(page.locator('li[data-testid="character-count"]:has-text("123")')).toBeVisible();
  });

  test('Caracteres Sin Espacios: 102', async ({ page }) => {
    await expect(page.locator('li[data-testid="character-no-spaces-count"]:has-text("102")')).toBeVisible();
  });

  test('Palabras: 19', async ({ page }) => {
    await expect(page.locator('li[data-testid="word-count"]:has-text("19")')).toBeVisible();

  });

  test('Números: 0', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-count"]:has-text("0")')).toBeVisible();
  });

  test('Suma números: 0', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-sum"]:has-text("0")')).toBeVisible();
  });

  test('Longitud promedio palabra: 5.53', async ({ page }) => {
    await expect(page.locator('li[data-testid="word-length-average"]:has-text("5.53")')).toBeVisible();
  });
});

test.describe('Para un texto con números:', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const textarea = await page.locator('textarea[name="user-input"]');
    await textarea.click();
    await textarea.type(TEST_TEXT_NUMBERS);
  });

  test('Números: 2', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-count"]:has-text("2")')).toBeVisible();
  });

  test('Suma números: 10', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-sum"]:has-text("10")')).toBeVisible();
  });
});

test.describe('Para un texto números decimales:', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const textarea = await page.locator('textarea[name="user-input"]');
    await textarea.click();
    await textarea.type(TEST_TEXT_DECIMALS);
  });

  test('Números: 3', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-count"]:has-text("3")')).toBeVisible();
  });

  test('Suma números: 2.9', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-sum"]:has-text("2.9")')).toBeVisible();
  });
});

test.describe('Para un texto sin números válidos:', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const textarea = await page.locator('textarea[name="user-input"]');
    await textarea.click();
    await textarea.type(TEST_TEXT_NOT_A_NUMBER);
  });

  test('Números: 0', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-count"]:has-text("0")')).toBeVisible();
  });

  test('Suma números: 0', async ({ page }) => {
    await expect(page.locator('li[data-testid="number-sum"]:has-text("0")')).toBeVisible();
  });
});

test.describe('Botón:', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const textarea = await page.locator('textarea[name="user-input"]');  
    await textarea.click();
    await textarea.type(TEST_TEXT_NO_NUMBERS);
  });

  test('Limpia caja de texto', async ({ page }) => {
    const textarea = await page.locator('textarea[name="user-input"]');
    await expect(textarea).toHaveValue(TEST_TEXT_NO_NUMBERS);
    const button = await page.locator('id=reset-button')
    await button.click();
    await expect(textarea).toHaveValue(TEST_TEXT_EMPTY);
  });
});

//TODO: Reemplazar skip por describe para ejecutar el test de funcionalidades opcionales
test.skip('Opcional:', () => {
  const TEST_TEXT_SPACES = '       ';
  const TEST_TEXT_PUNCTUATION_MARKS = '.,;:"«»[]{}()¿?¡!-';
  
  test.describe('Para un texto con sólo signos de puntuación:', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
      const textarea = await page.locator('textarea[name="user-input"]');
      await textarea.click();
      await textarea.type(TEST_TEXT_PUNCTUATION_MARKS);
    });

    test('Caracteres: 18', async ({ page }) => {
      await expect(page.locator('li[data-testid="character-count"]:has-text("18")')).toBeVisible();
    });

    test('Caracteres Sin Espacios: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="character-no-spaces-count"]:has-text("0")')).toBeVisible();
    });

    test('Palabras: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="word-count"]:has-text("0")')).toBeVisible();
    });

    test('Números: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="number-count"]:has-text("0")')).toBeVisible();
    });

    test('Suma números: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="number-sum"]:has-text("0")')).toBeVisible();
    });

    test('Longitud promedio palabra: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="word-length-average"]:has-text("0")')).toBeVisible();
    });
  });

  test.describe('Para un texto vacio:', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
      const textarea = await page.locator('textarea[name="user-input"]');
      await textarea.click();
      await textarea.type(TEST_TEXT_EMPTY);
    });

    test('Caracteres: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="character-count"]:has-text("0")')).toBeVisible();
    });

    test('Caracteres Sin Espacios: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="character-no-spaces-count"]:has-text("0")')).toBeVisible();
    });

    test('Palabras: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="word-count"]:has-text("0")')).toBeVisible();

    });

    test('Números: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="number-count"]:has-text("0")')).toBeVisible();
    });

    test('Suma números: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="number-sum"]:has-text("0")')).toBeVisible();
    });

    test('Longitud promedio palabra: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="word-length-average"]:has-text("0")')).toBeVisible();
    });

  });

  test.describe('Para un texto de solo espacios:', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
      const textarea = await page.locator('textarea[name="user-input"]');
      await textarea.click();
      await textarea.type(TEST_TEXT_SPACES);
    });

    test('Caracteres: 7', async ({ page }) => {
      await expect(page.locator('li[data-testid="character-count"]:has-text("7")')).toBeVisible();
    });

    test('Caracteres Sin Espacios: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="character-no-spaces-count"]:has-text("0")')).toBeVisible();
    });

    test('Palabras: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="word-count"]:has-text("0")')).toBeVisible();

    });

    test('Números: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="number-count"]:has-text("0")')).toBeVisible();
    });

    test('Suma números: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="number-sum"]:has-text("0")')).toBeVisible();
    });

    test('Longitud promedio palabra: 0', async ({ page }) => {
      await expect(page.locator('li[data-testid="word-length-average"]:has-text("0")')).toBeVisible();
    });

  });

});
