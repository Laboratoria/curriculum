import { render, screen, waitFor } from '@testing-library/react';
import { createTheme, ThemeProvider, StyledEngineProvider, adaptV4Theme } from '@mui/material/styles';
import themeConfig from '../../lib/theme';
import app from '../../lib/app';
import App from '.';

jest.mock('../../lib/app');

describe('App', () => {
  beforeEach(() => {
    app.mockRestore();
  });

  it('should show loading when auth user is undefined', () => {
    const { container } = render(<App />);
    const progress = container.querySelector('.MuiCircularProgress-root');
    expect(progress instanceof HTMLDivElement).toBe(true);
  });

  it('should show spanish home by default', async () => {
    app.useApp.mockImplementationOnce(() => ({
      auth: { user: null },
    }));
    render(
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(adaptV4Theme(themeConfig))}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    );
    await waitFor(() => screen.getByText('Desarrollo Web'));
  });

  it('should show portuguese home when navigator.language is pt-BR', async () => {
    window.history.pushState({}, 'Test page', '/');
    const spy = jest.spyOn(window.navigator, 'language', 'get').mockReturnValue('pt');
    app.useApp.mockImplementationOnce(() => ({
      auth: { user: null },
    }));
    render(
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(adaptV4Theme(themeConfig))}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    );
    await waitFor(() => screen.getByText('Desenvolvimento Web'));
    spy.mockRestore();
  });
});
