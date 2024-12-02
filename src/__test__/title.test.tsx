import { render, screen } from '@testing-library/react';
import Title from '../components/Title';

describe('Title Component', () => {
  it('should render the children passed to it', () => {
    const testText = 'Hello World';
    render(<Title>{testText}</Title>);

    const headingElement = screen.getByText(testText);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-3xl');
  });
});
