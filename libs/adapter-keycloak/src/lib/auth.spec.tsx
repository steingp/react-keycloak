import { render, screen } from '@testing-library/react';
import React from 'react';
import { Auth } from './auth';

describe('Auth component', () => {
  it('renders expected content', () => {
    render(<Auth />);
    expect(screen.getByText(/auth works/i)).toBeInTheDocument();
  });
});
