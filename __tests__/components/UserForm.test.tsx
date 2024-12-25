import { render, screen, fireEvent } from '@testing-library/react';
import { UserForm } from '@/components/UserForm';

import { createMockUser } from '../setup'


describe('UserForm', () => {
  test('validates user age', () => {
    const user = createMockUser({ age: 25 })
    expect(user.age).toBeWithinRange(18, 65)
  })

  test('validates user email', () => {
    const user = createMockUser()
    expect(user.email).toBeValidEmail()
  })
})

describe('UserForm', () => {
  test('displays error when submitting empty form', () => {
    render(<UserForm />);
    
    fireEvent.click(screen.getByText('Submit'));
    
    expect(screen.getByText('All fields are required')).toBeInTheDocument();
  });

  test('clears error when form is filled correctly', () => {
    render(<UserForm />);
    
    // First trigger the error
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('All fields are required')).toBeInTheDocument();
    
    // Fill the form
    fireEvent.change(screen.getByLabelText('Name:'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'john@example.com' },
    });
    
    // Submit again
    fireEvent.click(screen.getByText('Submit'));
    
    expect(screen.queryByText('All fields are required')).not.toBeInTheDocument();
  });
});