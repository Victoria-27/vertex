import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

describe('Form', () => {
  it('renders the form', () => {
    render(<Form />);
    expect(screen.getByText('STUDENT ELIGIBILITY REPORT')).toBeInTheDocument();
  });

  it('allows adding timeline entries', () => {
    render(<Form />);
    const addButton = screen.getByText('Add Timeline Entry');
    fireEvent.click(addButton);
    expect(screen.getAllByPlaceholderText('Your present College')).toHaveLength(2);
  });

  it('allows adding sport entries', () => {
    render(<Form />);
    const addButton = screen.getByText('Add Sport Entry');
    fireEvent.click(addButton);
    expect(screen.getAllByPlaceholderText('Sport')).toHaveLength(2);
  });

  it('displays error messages for required fields', async () => {
    render(<Form />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(await screen.findByText('Present College is required')).toBeInTheDocument();
  });
});