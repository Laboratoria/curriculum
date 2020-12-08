import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import router from 'react-router-dom';
import app from '../../lib/app';
import TopBar from '.';

jest.mock('../../lib/app');

describe('TopBar', () => {
  beforeEach(() => {
    // router.mockRestore();
    app.mockRestore();
  });

  it('should render without crashing', async () => {
    // render(<TopBar />);
    // expect(screen.getByText('Curriculum')).toBeInTheDocument();
  });
});
