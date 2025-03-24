# Task Manager App

A full-stack React task management application built with TypeScript, React Router, Zustand for state management, and JSON Server for the backend API.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete or incomplete
- View task statistics on a separate dashboard
- Light and dark theme support
- Responsive design
- Optimized performance with React.memo, useCallback, and useMemo

## Tech Stack

- React 19 with TypeScript
- React Router for routing
- Zustand for state management
- Axios for API requests
- JSON Server for mock API
- Code-splitting with React.lazy
- Context API for theme management

## Performance Optimizations

- Memoization with React.memo
- Callback optimization with useCallback
- Computed values with useMemo
- Code-splitting with React.lazy
- Memory leak detection with custom hook

## Running the Project

### Prerequisites

- Node.js 14+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the JSON Server (mock API):

```bash
npm run server
```

4. In a separate terminal, start the React development server:

```bash
npm start
```

5. Open your browser and navigate to http://localhost:3000

## Deployment

This project is configured for easy deployment to Vercel:

1. Create a Vercel account if you don't have one: https://vercel.com/signup
2. Install Vercel CLI:

```bash
npm install -g vercel
```

3. Login to Vercel:

```bash
vercel login
```

4. Deploy:

```bash
vercel
```

## Project Structure

```
/src
  /components     # Reusable components
  /context        # Context providers (theme, tasks)
  /hooks          # Custom hooks
  /pages          # Page components
  App.tsx         # Main application component
  index.tsx       # Entry point
```

## API Endpoints

- GET /tasks - Get all tasks
- GET /tasks/:id - Get a specific task
- POST /tasks - Create a new task
- PUT /tasks/:id - Update a task
- DELETE /tasks/:id - Delete a task

## Future Improvements

- Authentication
- Task categories
- Due dates and reminders
- Search and filter functionality
- Persist theme preference in localStorage
