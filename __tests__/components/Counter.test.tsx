import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '@/components/Counter';

describe('Counter', () => {
  test('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByLabelText('increment'));
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByLabelText('decrement'));
    expect(screen.getByText(/counter: -1/i)).toBeInTheDocument();
  });
});