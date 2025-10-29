import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Todo List', () => {
  it('renders input and add button', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/add city name/i)).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('adds a new city when Add button is clicked', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/add city name/i);
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Paris' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('does not add a city when input is empty', () => {
    render(<App />);
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });

  it('removes a city when X button is clicked', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/add city name/i);
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.click(addButton);

    expect(screen.getByText('London')).toBeInTheDocument();

    const deleteButton = screen.getByText('X');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('London')).not.toBeInTheDocument();
  });
})