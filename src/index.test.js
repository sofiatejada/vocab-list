import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from './App';

// set up empty container for test
let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

// cleanup after each test
afterEach(() => {
    cleanup();
    container.remove();
})
test('renders App component within StrictMode', () => {
    render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})