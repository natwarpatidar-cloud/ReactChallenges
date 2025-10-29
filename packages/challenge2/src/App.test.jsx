import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

jest.useFakeTimers();

describe('stopwatch/Timer', () => {
  it('renders initial timer values correctly', () => {
    render(<App />);
    expect(screen.getByText(/0 mins/i)).toBeInTheDocument();
    expect(screen.getByText(/56 secs/i)).toBeInTheDocument();
  });

  it('starts and increments timer when Start is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText(/58 secs/i)).toBeInTheDocument();
  });

  it('stops timer when Stop is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    fireEvent.click(screen.getByText('Stop'));

    expect(screen.getByText(/58 secs/i)).toBeInTheDocument();
  });

  it('resets timer when Reset is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText(/58 secs/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reset'));

    expect(screen.getByText(/0 mins/i)).toBeInTheDocument();
    expect(screen.getByText(/0 secs/i)).toBeInTheDocument();
  });

  it('increments minutes correctly after 60 seconds', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));

    act(() => {
      jest.advanceTimersByTime(4000); 
    });

    expect(screen.getByText(/1 mins/i)).toBeInTheDocument();
    expect(screen.getByText(/0 secs/i)).toBeInTheDocument();
  });
});