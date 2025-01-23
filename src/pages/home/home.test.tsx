import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Home } from '.';

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const h1 = await screen.queryByText(/welcome/i);

    expect(h1).toBeInTheDocument();
  });
});
