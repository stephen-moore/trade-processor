import { render, screen } from '@testing-library/react';
import ViewTrades from './ViewTrades';

test('renders Trades Board Title', () => {
    render(<ViewTrades />);
    const element = screen.getByText(/Trades Board/i);
    expect(element).toBeInTheDocument();
});
