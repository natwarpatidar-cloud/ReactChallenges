import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Form data', () => {
    it('should render the form with all fields and buttons', () => {
        render(<App />);
        
        expect(screen.getByLabelText(/Username:/i)).toBeVisible();
        expect(screen.getByLabelText(/Full name:/i)).toBeVisible();
        expect(screen.getByLabelText(/Age:/i)).toBeVisible();
        expect(screen.getByRole('button', { name: 'Submit' })).toBeVisible();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeVisible();
    });

    it('should display the data correctly on click of submit button', () => {
        render(<App />);

        const username = screen.getByLabelText(/Username:/i)
        const fullName = screen.getByLabelText(/Full name:/i)
        const age = screen.getByLabelText(/Age:/i)

        fireEvent.change(username, { target: { value: 'Natwar' } });
        fireEvent.change(fullName, { target: { value: 'Natwar Patidar' } });
        fireEvent.change(age, { target: { value: '20' } });

        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(screen.getByText("Natwar")).toBeInTheDocument();
        expect(screen.getByText("Natwar Patidar")).toBeInTheDocument();
        expect(screen.getByText("20")).toBeInTheDocument();
    });

    it('should reset the form fields and clear the displayed data when Reset is clicked', () => {
        render(<App />);

        const username = screen.getByLabelText(/Username:/i);
        const fullName = screen.getByLabelText(/Full name:/i);
        const age = screen.getByLabelText(/Age:/i);

        fireEvent.change(username, { target: { value: 'Natwar' } });
        fireEvent.change(fullName, { target: { value: 'Natwar Patidar' } });
        fireEvent.change(age, { target: { value: '20' } });

        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        screen.findByText('Natwar');
        screen.findByText('Natwar Patidar');
        screen.findByText('20');

        fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

        expect(username.value).toBe('');
        expect(fullName.value).toBe('');
        expect(age.value).toBe('');

        expect(screen.queryByText('Natwar')).not.toBeInTheDocument();
        expect(screen.queryByText('Natwar Patidar')).not.toBeInTheDocument();
        expect(screen.queryByText('20')).not.toBeInTheDocument();
    })

});