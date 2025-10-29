import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

jest.useFakeTimers();

describe('App Component', () => {

    it('renders App with initial state', () => {
        render(<App />);
        
        expect(screen.getByText(/No of clicks until timer expires/i)).toBeInTheDocument();
        expect(screen.getByText(/Time left: 10 seconds/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    });

    it('starts the timer and counts down', () => {
        render(<App />);
        
        expect(screen.getByText(/Time left: 10 seconds/i)).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        expect(screen.getByText(/Time left: 5 seconds/i)).toBeInTheDocument();
        
        act(() => {
            jest.advanceTimersByTime(5000);
        });

        expect(screen.getByText(/Time left: 0 seconds/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '+' })).not.toBeInTheDocument();  
    });

    it('increments count on button click while timer is running', async () => {
        render(<App />);
        
        expect(screen.getByText('0')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('button is disabled after the timer ends', async () => {
        render(<App />);
        
        act(() => {
            jest.advanceTimersByTime(10000);
        });

        expect(screen.getByRole('button', { name: '+' })).not.toBeInTheDocument();
    });

});