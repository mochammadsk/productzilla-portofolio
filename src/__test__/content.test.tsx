import { render, screen } from '@testing-library/react';
import Content from '../components/Content';
import '@testing-library/jest-dom';

describe('Content Component', () => {
  const setup = () => {
    render(
      <Content
        job='Software Developer'
        period='Jan 2020 - Present'
        desc='Developed web applications and managed databases.'
        link='Portfolio'
        href='https://myportfolio.com'
      />
    );
  };

  it('renders the job, period, description, and link correctly', () => {
    setup();
    expect(screen.getByText(/Software Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Jan 2020 - Present/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Developed web applications and managed databases./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  });

  it('should render a link with correct href and target', () => {
    setup();
    const linkElement = screen.getByText(/Portfolio/i);
    expect(linkElement).toHaveAttribute('href', 'https://myportfolio.com');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('should render the Content component in the document', () => {
    setup();
    const contentComponent = screen.getByText('Software Developer');
    expect(contentComponent).toBeInTheDocument();
  });
});
