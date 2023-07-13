import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from './App';

// cleanup after each test
afterEach(() => {
    cleanup();
})
test('renders App component within StrictMode', () => {
    render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})