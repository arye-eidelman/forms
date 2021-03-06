import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter><App/></BrowserRouter>);
  const linkElement = getByText(/new form/i);
  expect(linkElement).toBeInTheDocument();
});