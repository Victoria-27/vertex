import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';
import '@testing-library/jest-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormHeader from '../components/FormHeader';


describe('Form', () => {
  it('renders the form', () => {
    render(<Form />);
    expect(screen.getByText('STUDENT ELIGIBILITY REPORT')).toBeInTheDocument();
  });

  it('displays error messages for required fields', async () => {
    render(<Form />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(await screen.findByText('Present College is required')).toBeInTheDocument();
  });
});

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('FormHeader', () => {
  it('renders the component', () => {
    render(<FormHeader />);
    expect(screen.getByAltText('Company Logo')).toBeInTheDocument();
    expect(screen.getByText('STUDENT ELIGIBILITY REPORT')).toBeInTheDocument();
    expect(screen.getByText('FORM 1')).toBeInTheDocument();
    expect(screen.getByText('Please type or print neatly')).toBeInTheDocument();
  });

  it('has the correct image attributes', () => {
    render(<FormHeader />);
    const image = screen.getByAltText('Company Logo');
    expect(image).toHaveAttribute('src', '/assets/logo.png');
    expect(image).toHaveAttribute('width', '100');
    expect(image).toHaveAttribute('height', '100');
  });
});

jest.mock('axios');
jest.mock('react-toastify');

describe('Form', () => {
  it('renders the form components', () => {
    render(<Form />);
    expect(screen.getByText('STUDENT ELIGIBILITY REPORT')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your present College')).toBeInTheDocument();
    expect(screen.getByText('Add Timeline Entry')).toBeInTheDocument();
    expect(screen.getByText('Add Sport Entry')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});