import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    it('should display the data correctly on click of submit button', async () => {
        render(<App />);
        const user = userEvent.setup();

        const username = screen.getByLabelText(/Username:/i);
        const fullName = screen.getByLabelText(/Full name:/i);
        const age = screen.getByLabelText(/Age:/i);

        await user.type(username, "Natwar");
        await user.type(fullName, "Natwar Patidar");
        await user.type(age, "20");

        await user.click(screen.getByRole('button', { name: 'Submit' }));

        await waitFor(() => {
            expect(screen.getByText("Natwar")).toBeInTheDocument();
            expect(screen.getByText("Natwar Patidar")).toBeInTheDocument();
            expect(screen.getByText("20")).toBeInTheDocument();
        });
    });

    it('should reset the form fields and clear the displayed data when Reset is clicked', async () => {
        render(<App />);
        const user = userEvent.setup();

        const username = screen.getByLabelText(/Username:/i);
        const fullName = screen.getByLabelText(/Full name:/i);
        const age = screen.getByLabelText(/Age:/i);

        await user.type(username, "Natwar");
        await user.type(fullName, "Natwar Patidar");
        await user.type(age, "20");

        await user.click(screen.getByRole('button', { name: 'Submit' }));

        await waitFor(() => {
            expect(screen.getByText('Natwar')).toBeInTheDocument();
            expect(screen.getByText('Natwar Patidar')).toBeInTheDocument();
            expect(screen.getByText('20')).toBeInTheDocument();
        });

        await user.click(screen.getByRole('button', { name: 'Reset' }));

        expect(username).toHaveValue('');
        expect(fullName).toHaveValue('');
        expect(age).toHaveValue(null);

        await waitFor(() => {
            expect(screen.queryByText('Natwar')).not.toBeInTheDocument();
            expect(screen.queryByText('Natwar Patidar')).not.toBeInTheDocument();
            expect(screen.queryByText('20')).not.toBeInTheDocument();
        });
    });

    it('should show error message if form fields are empty', async () => {
        render(<App />);
        const user = userEvent.setup();

        const username = screen.getByLabelText(/Username:/i);
        const fullName = screen.getByLabelText(/Full name:/i);
        const submitButton = screen.getByRole('button', { name: 'Submit' });

        await user.click(submitButton);
        expect(await screen.findByText('Username is required')).toBeInTheDocument();

        await user.type(username, 'Natwar');
        await user.click(submitButton);
        expect(await screen.findByText('Full name is required')).toBeInTheDocument();

        await user.type(fullName, 'Natwar Patidar');
        await user.click(submitButton);
        expect(await screen.findByText('Age is required')).toBeInTheDocument();
    });
});
