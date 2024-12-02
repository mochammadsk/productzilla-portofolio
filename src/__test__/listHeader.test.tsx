import { render, screen } from '@testing-library/react';
import { ListHeader, ListHeaderIcon } from '../components/ListHeader';

describe('ListHeader Component', () => {
  it('should render the icon and children correctly', () => {
    const testIcon = <span data-testid='test-icon'>Icon</span>;
    const testText = 'List Item';

    render(<ListHeader icon={testIcon}>{testText}</ListHeader>);

    const iconElement = screen.getByTestId('test-icon');
    const textElement = screen.getByText(testText);

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('text-sm');
  });

  it('should have proper classes for styling', () => {
    const testIcon = <span data-testid='test-icon'>Icon</span>;
    const testText = 'List Item';

    render(<ListHeader icon={testIcon}>{testText}</ListHeader>);

    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveClass(
      'flex gap-1.5 p-2 hover:bg-[#15191f] cursor-pointer rounded-lg align-center items-center'
    );
  });
});

describe('ListHeaderIcon Component', () => {
  it('should render the icon correctly', () => {
    const testIcon = <span data-testid='test-icon'>Icon</span>;

    render(<ListHeaderIcon icon={testIcon} />);

    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.parentElement).toHaveClass('cursor-pointer');
  });
});
