import Button from '../components/Button';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import '@testing-library/jest-dom';

// Mocking the toast function to avoid actual toast popups during tests
jest.mock('react-toastify', () => ({
  ...jest.requireActual('react-toastify'),
  toast: {
    success: jest.fn(),
  },
}));

describe('Button Component', () => {
  const setup = () => {
    render(
      <div>
        <Button />
        <ToastContainer />
      </div>
    );
  };

  it('renders the button correctly', () => {
    setup();
    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Send');
  });

  it('calls toast.success when button is clicked', async () => {
    setup();
    const button = screen.getByRole('button', { name: /send/i });

    // Click the button
    fireEvent.click(button);

    // Check that the toast.success function is called
    await waitFor(() => expect(toast.success).toHaveBeenCalledTimes(1));

    // Ensure the message is sent
    expect(toast.success).toHaveBeenCalledWith(
      'Message successfully sent!',
      expect.objectContaining({
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );
  });

  it('should show the ToastContainer in the document', () => {
    setup();
    // Use querySelector to find the Toastify class
    const toastContainer = document.querySelector('.Toastify');
    expect(toastContainer).toBeInTheDocument();
  });
});
