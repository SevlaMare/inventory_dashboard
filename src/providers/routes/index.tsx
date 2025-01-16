import { useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouteProps,
} from 'react-router-dom';
import { RouterContextType, RouterProps } from './interfaces';

// pages
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/notfound';

export const ContextRouter = createContext<RouterContextType | null>(null);

export function RouterProvider({ children }: RouterProps) {
  const [routeProps, setRouteProps] = useState<RouteProps | null>(null);

  return (
    <Router>
      <ContextRouter.Provider value={{ routeProps, setRouteProps }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        {children}
      </ContextRouter.Provider>
    </Router>
  );
}
