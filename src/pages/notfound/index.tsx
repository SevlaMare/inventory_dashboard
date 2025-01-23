import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import styled from './notfound.module.css';

export function NotFound() {
  // Redirect to the home page after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      return <Navigate to='/' replace />;
    }, 3000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styled.container}>
      <h1>Not Found. </h1>
      <p>Redirecting to home...</p>
    </div>
  );
}
