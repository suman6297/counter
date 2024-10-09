import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';

describe('Counter Component', () => {
    test('renders counter with initial value', () => {
        render(<Counter />);
        const counterValue = screen.getByText(/count: 0/i);
        expect(counterValue).toBeInTheDocument();
    });

    test('increments counter value', () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', { name: /increment/i });
        fireEvent.click(incrementButton);
        expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    });

    test('decrements counter value', () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', { name: /increment/i });
        fireEvent.click(incrementButton);
        const decrementButton = screen.getByRole('button', { name: /decrement/i });
        fireEvent.click(decrementButton);
        expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    });
});
