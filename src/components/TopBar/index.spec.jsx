import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useApp, themeConfig } from '@laboratoria/react';
import { useLocation, useParams } from 'react-router-dom';
import TopBar from '.';

vi.mock('@laboratoria/react');

vi.mock('react-router-dom', () => {
  return {
    useNavigate: vi.fn(),
    useParams: vi.fn(),
    useLocation: vi.fn(),
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  };
});

describe('TopBar', () => {
  beforeEach(() => {
    useApp.mockRestore();
  });

  it('should render without crashing', async () => {
    useParams.mockReturnValue({ lang: 'es' });
    useLocation.mockReturnValue({ pathname: '/es/' });
    useApp.mockImplementation(() => ({
      auth: { user: null },
    }));

    const { container } = render(
      <ThemeProvider theme={createTheme(themeConfig)}>
        <TopBar lang="es" />
      </ThemeProvider>,
    );

    const link = container.querySelector('header a[href="/es/"]');
    expect(link?.tagName).toBe('A');
    expect(link?.textContent.trim()).toBe('Curriculum');
  });
});
