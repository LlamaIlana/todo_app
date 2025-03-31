# To-Do List Application with React Redux

This is a to-do list application built using React and Redux to manage tasks efficiently. The app allows users to add, edit, delete, and mark tasks as completed, with a clean and user-friendly interface.

## Features

- **Initial State:**
  - Preloaded with two tasks.
- **Task Management:**
  - Add, edit, delete, and mark tasks as completed.
  - Prevents editing of completed tasks.
- **Add/Edit To-Dos:**
  - Input field to add tasks, supporting both "Enter" key and an "Add" button.
  - Modal/popup interface for editing tasks.
  - Warning message for empty input when adding or editing tasks.
- **UI Elements:**
  - App title and initial to-do items displayed on start.
  - Info icon with a popup containing user instructions.
  - To-do counter that updates dynamically and stays fixed on the screen.
- **Styling:**
  - Completed tasks are faded out.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/LlamaIlana/to-do-list.git
   cd to-do-list
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```
4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Project Structure
- **src/**: Contains React components, Redux store, and CSS.
- **public/**: Contains the `index.html` file where the React app is mounted.

## Dependencies
- React
- Redux
- React-Redux
- @reduxjs/toolkit
- Bootstrap

## Deployment
This project is deployed on GitHub Pages. To deploy:
```bash
npm run deploy
```

## Instructions
1. Click the "Add Icon" button or press "Enter" to add new tasks.
2. Click the "Edit Icon" button to modify existing tasks (unavailable for completed tasks).
3. Click the "Delete Icon" button to remove tasks.
4. Click the "Checkbox Icon" to mark tasks as completed.
5. Click the info icon to view user instructions.


