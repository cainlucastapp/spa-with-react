import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  
  // Header Tests
  describe('Header', () => {
    it('renders the header text', () => {
      render(<App />);
      expect(screen.getByText('Project Showcase')).toBeInTheDocument();
    });
  });

  
});