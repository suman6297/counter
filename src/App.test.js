import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter component', () => {
    render(<App />);
    const counterElement = screen.getByText(/count:/i);
    expect(counterElement).toBeInTheDocument();
});
