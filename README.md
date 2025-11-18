# Personal Project Showcase SPA with React
A dynamic single-page application for showcasing personal projects with search and add functionality.


## Lab Overview
Build a personal project showcase application based on a provided design mock-up for the landing page.

## Features
Application must include the following core features: 

- [X] A landing page displaying a list of projects
- [X] A form that allows users to add new projects dynamically
- [X] A search feature for dynamically filtering projects
- [ ] A responsive design that is inspired by the mock-up

## Component Architecture
```
App (State Management: Project State)
├── Header
├── AddProjectForm (receives: onAddProject)
├── SearchBar (receives: searchTerm, onSearchChange)
└── ProjectList (receives: filteredProjects)
    └── ProjectCard (receives: project)
└── Footer
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

## Usage

### Adding a Project
1. Fill in the "Title" field with your project name
2. Add a description in the "Description" field
3. Click "Add Project" button
4. Your project will appear in the list below

### Searching Projects
1. Type in the search bar at the top
2. Results filter in real-time based on title or description
3. Clear the search to see all projects


## Future Enhancements
- Persistent data storage (localStorage or backend API)
- Additional Porject Info (Price, more detail descriptions, comments?)
- Image upload capability for project thumbnails
- Full CRUD operations (Update and Delete projects)
- Projects that are click able to display more info about the project
- Sorting options (by date, title, etc.)
- Dark mode toggle
- Clickable tags that sort by tag
- Hide Add Project behind admin login wall (Important!)
