# React User Dashboard

## Project Overview

A modern, responsive user management dashboard built with React. This application displays a list of users fetched from a mock API, allowing users to search, sort, and paginate through the data. It features a clean UI with dark/light theme support and detailed user profiles.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ThousufAhammed/React-User-Dashboard.git
   cd React-User-Dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000`.

4. **Build for production:**
   ```bash
   npm run build
   ```

## Features Implemented

- **User List Display:** Shows users in card format with avatar, name, email, and company.
- **Search Functionality:** Search users by name in real-time.
- **Sorting:** Sort users alphabetically by name (ascending/descending).
- **Pagination:** Navigate through users with customizable page size.
- **User Details:** Click on a user card to view detailed information.
- **Theme Toggle:** Switch between light and dark themes.
- **Responsive Design:** Works on desktop and mobile devices.
- **Loading States:** Displays loader while fetching data.
- **Error Handling:** Shows error messages if API fails.

## Technologies Used

- **React:** Frontend library for building the UI.
- **React Router:** For client-side routing.
- **CSS:** Custom styles with CSS variables for theming.
- **JSONPlaceholder API:** Mock API for user data.
- **Create React App:** Build tool and development server.
- **Netlify:** For deployment (configured via netlify.toml).

## Live Deployment Link

[View Live Demo](https://react-user-dashboard-thousuf.netlify.app/) (if deployed)