import { beforeEach, describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useApp, themeConfig } from '@laboratoria/sdk-react';
import App from './index.jsx';

vi.mock('@laboratoria/sdk-react');

describe('App', () => {
  beforeEach(() => {
    useApp.mockRestore();
  });

  it('should show loading when auth user is undefined', () => {
    useApp.mockReturnValue({ auth: {} });
    const { container } = render(
      <ThemeProvider theme={createTheme(themeConfig)}>
        <App />
      </ThemeProvider>
    );
    expect(container.outerHTML).toBe('<div>Loading...</div>');
  });

  it('should show spanish home by default', async () => {
    useApp.mockImplementation(() => ({
      auth: { user: null },
    }));
    render(
      <ThemeProvider theme={createTheme(themeConfig)}>
        <App />
      </ThemeProvider>
    );
    await waitFor(() => screen.getByText('Desarrollo Web'));
  });

  it('should show portuguese home when navigator.language is pt', async () => {
    window.history.pushState({}, 'Test page', '/');
    const spy = vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('pt');
    useApp.mockImplementation(() => ({
      auth: { user: null },
    }));
    render(
      <ThemeProvider theme={createTheme(themeConfig)}>
        <App />
      </ThemeProvider>
    );
    await waitFor(() => screen.getByText('Desenvolvimento Web'));
    spy.mockRestore();
  });
});
