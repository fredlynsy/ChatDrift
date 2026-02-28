// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChatDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChatDrift/i);
    expect(titleElement).toBeInTheDocument();
});
