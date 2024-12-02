import { render, screen } from '@testing-library/react';
import CurrentDate from '../components/Date';
import '@testing-library/jest-dom';

describe('CurrentDate Component', () => {
  it('should render the current date correctly', () => {
    // Render the component
    render(<CurrentDate />);

    // Get the current date and format it manually
    const today = new Date();
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = dayNames[today.getDay()];
    const date = today.getDate();
    const month = monthNames[today.getMonth()];

    // Check if the rendered date matches the current date format
    const dateElement = screen.getByText(
      (content) =>
        content.startsWith(day) &&
        content.includes(date) &&
        content.includes(month)
    );
    expect(dateElement).toBeInTheDocument();
  });

  it('should render the component with correct styles', () => {
    // Render the component
    render(<CurrentDate />);

    // Check if the element has the expected classes
    const dateElement = screen.getByText((content) =>
      content.includes('December')
    );
    expect(dateElement).toHaveClass('text-sm');
    expect(dateElement).toHaveClass('text-[#9198a1]');
  });
});
