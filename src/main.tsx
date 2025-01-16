import ReactDOM from 'react-dom/client';

import { RouterProvider } from './providers/routes';
import { AuthProvider } from './providers/auth';
import { ThemeProvider } from './providers/theme';

import { Provider as ReduxProvider } from 'react-redux';
import { store as reduxStore } from './redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <AuthProvider>
      <ReduxProvider store={reduxStore}>
        <RouterProvider />
      </ReduxProvider>
    </AuthProvider>
  </ThemeProvider>
);
