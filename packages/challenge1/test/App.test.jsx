import App from '../src/App';
import { render, screen, fireEvent } from '@testing-library/react';

describe("Show/Hide title", () => {
  
  it('renders button and text correctly', () => {
    render(<App />);
    expect(screen.getByText('Hide Text')).toBeVisible();
    expect(screen.getByText('Hello, welcome to react challenges')).toBeInTheDocument();
  });

  it('hides the text when hide text button is clicked', () => {
    render(<App />);
    expect(screen.getByText('Hide Text')).toBeVisible();
    expect(screen.getByText('Hello, welcome to react challenges')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Hide Text'));
    expect(screen.getByText('Show Text')).toBeVisible();
    expect(screen.queryByText('Hello, welcome to react challenges')).not.toBeInTheDocument();
  });

  it('shows the text again when show text button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Hide Text'));
    expect(screen.queryByText('Hello, welcome to react challenges')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Show Text'));
    expect(screen.getByText('Hello, welcome to react challenges')).toBeInTheDocument();
  });

});