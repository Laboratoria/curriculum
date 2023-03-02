import { render } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useApp, themeConfig } from '@laboratoria/react';
import { useLocation, useParams } from 'react-router-dom';
import TopBar from '.';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
    useParams: jest.fn(),
    useLocation: jest.fn(),
    Link: ({ to, children }) => (
      <a href={to}>
        {children}
      </a>
    ),
  };
});

describe('TopBar', () => {
  it('should render without crashing', async () => {
    useParams.mockReturnValue({ lang: 'es' });
    useLocation.mockReturnValue({ pathname: '/es/' });
    useApp.mockImplementation(() => ({
      auth: { user: null },
    }));

    const { container } = render(
      <ThemeProvider theme={createTheme(themeConfig)}>
        <TopBar lang="es" />
      </ThemeProvider>
    );

    const link = container.querySelector('header a[href="/es/"]');
    expect(link?.tagName).toBe('A');
    expect(link?.textContent.trim()).toBe('Curriculum');
  });
});
