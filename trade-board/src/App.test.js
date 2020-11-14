import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Trades Board Title', () => {
  render(<App />);
  const element = screen.getByText(/Trades Board/i);
  expect(element).toBeInTheDocument();
});
