import { vi } from 'vitest';

export const useApp = vi.fn();

export const themeConfig = {
  palette: {
    primary: { main: '#FFE521' },
    mint: {},
    magenta: {},
  },
};

export const Loading = () => <>Loading...</>;
export const ScrollRestoration = () => null;
export const setPage = () => null;
