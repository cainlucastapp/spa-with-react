# Personal Project Showcase SPA with React

**Work In Progress**

## Overview
Build a personal project showcase application based on a provided design mock-up for the landing page.

## Features / TODO
Application must include the following core features: 

- [ ] A landing page displaying a list of projects
- [ ] A form that allows users to add new projects dynamically
- [ ] A search feature for dynamically filtering projects
- [ ] A responsive design that is inspired by the mock-up

## Component Architecture
```
App (State Management: Project State)
├── Header
├── AddProjectForm (receives: onAddProject)
├── SearchBar (receives: searchTerm, onSearchChange)
└── ProjectList (receives: filteredProjects, onDeleteProject)
    └── ProjectCard (receives: project, onDelete)
```

## Tech Stack
- React 19
- Vite 7
- Semantic UI CSS
- Vitest (testing)

## Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```