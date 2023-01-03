import { render, screen } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeConfig } from '@laboratoria/react';
import { useLocation, useParams } from 'react-router-dom';
import TopBar from '.';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
    useParams: jest.fn(),
    useLocation: jest.fn(),
  };
});

describe('TopBar', () => {
  it('should render without crashing', async () => {
    useParams.mockReturnValue({ lang: 'es' });
    useLocation.mockReturnValue({ pathname: '/es/' });

    render(
      <ThemeProvider theme={createTheme(themeConfig)}>
        <TopBar />
      </ThemeProvider>
    );

    expect(screen.getByText('Curriculum')).toBeInTheDocument();
  });
});
