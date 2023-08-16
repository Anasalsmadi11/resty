
import React from 'react';
import { render, screen,waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Request Method:/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('it loads and displays the request method', async () => {
    render(<App />);
    const reqMethod  = await waitFor(() => screen.getByTestId('req-method'));
    // console.log('******', reqMethod.textContent);
    expect(reqMethod.textContent).toBe('Request Method: ');
}) 
it('it displays the URL ', async () => {
    render(<App />);
    const url  = await waitFor(() => screen.getByTestId('url'));

    expect(url.textContent).toBe('URL: ');
}) 