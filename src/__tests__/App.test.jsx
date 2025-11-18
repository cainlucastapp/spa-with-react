import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

//Header tests
describe('Header', () => {
  it('renders the header text', () => {
    render(<App />);
    expect(screen.getByText('Not Real Studio Project Showcase')).toBeInTheDocument();
  });
});


//SearchBar tests
describe('SearchBar', () => {
  it('renders search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search Projects...');
    expect(searchInput).toBeInTheDocument();
  });

  it('filters projects based on title search', async () => {
    const user = userEvent.setup();
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search...');
    
    await user.type(searchInput, 'Poke');
    
    expect(screen.getByText('Pokebub')).toBeInTheDocument();
    expect(screen.queryByText('Karen Versus The Manager: Black Friday Edition')).not.toBeInTheDocument();
    expect(screen.queryByText('Ping Pong With King Kong')).not.toBeInTheDocument();
  });

  it('filters projects based on description search', async () => {
    const user = userEvent.setup();
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search...');
    
    await user.type(searchInput, 'Nintendo');
    
    expect(screen.getByText('Pokebub')).toBeInTheDocument();
    expect(screen.queryByText('Karen Versus The Manager: Black Friday Edition')).not.toBeInTheDocument();
  });
});


//AddProjectForm tests
describe('AddProjectForm', () => {
  it('renders form with title and description inputs', () => {
    render(<App />);
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add project/i })).toBeInTheDocument();
  });

  it('adds new project and clears form when submitted', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const titleInput = screen.getByLabelText('Title');
    const descInput = screen.getByLabelText('Description');
    const submitButton = screen.getByRole('button', { name: /add project/i });
    
    await user.type(titleInput, 'HR Office Flirt RPG');
    await user.type(descInput, 'Your the head of HR. Flirt with everyone you work with. Write yourself up.');
    await user.click(submitButton);

    expect(screen.getByText('HR Office Flirt RPG')).toBeInTheDocument();
    expect(titleInput).toHaveValue('');
    expect(descInput).toHaveValue('');
  });
});


//ProjectList tests
describe('ProjectList', () => {
  it('renders all initial projects', () => {
    render(<App />);
    expect(screen.getByText('Pokebub')).toBeInTheDocument();
    expect(screen.getByText('Karen Versus The Manager: Black Friday Edition')).toBeInTheDocument();
    expect(screen.getByText('Ping Pong With King Kong')).toBeInTheDocument();
  });

  it('renders correct number of project cards', () => {
    render(<App />);
    const projectCards = screen.getAllByLabelText('project card');
    expect(projectCards).toHaveLength(3);
  });
});


// ProjectCard Tests
describe('ProjectCard', () => {
  it('renders project title and description', () => {
    render(<App />);
    expect(screen.getByText('Pokebub')).toBeInTheDocument();
    expect(screen.getByText(/Train and fight your Bubs/i)).toBeInTheDocument();
  });

  it('renders project image with correct alt text', () => {
    render(<App />);
    const image = screen.getByAltText('Photo of Pokebub');
    expect(image).toBeInTheDocument();
  });
});