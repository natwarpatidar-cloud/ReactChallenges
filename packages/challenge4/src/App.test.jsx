import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Progress bar', () => {
  it('should render the initial progress bar with a default value of 10%', () => {
    render(<App />);
    
    const progressBar = screen.getByText(/10%/i);
    expect(progressBar).toHaveStyle('width: 10%');
  });

  it('should update progress bar when input is changed', () => {
    render(<App />);

    const input = screen.getByTestId('width-input');
    
    fireEvent.change(input, { target: { value: '50' } });

    expect(screen.getByText(/50%/i)).toBeVisible();
  });

  it('should not update progress bar if input is out of bounds (less than 0 or greater than 100)', () => {
    render(<App />);
    
    const input = screen.getByTestId('width-input');
    
    fireEvent.change(input, { target: { value: '120' } });
    let progressBar = screen.getByText(/10%/i);
    expect(progressBar).toBeVisible();

    fireEvent.change(input, { target: { value: '-50' } });
    progressBar = screen.getByText(/10%/i);
    expect(progressBar).toBeVisible();
  });
});