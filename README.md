```markdown
# Testimonial Web Application

This is a MERN stack web application that allows users to submit ratings for stores registered on the platform. The application supports different user roles: System Admin, Normal User, and Store Owner. Each role has specific functionalities as described below.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB

## Requirements

- Users can submit a rating (1-5) for any store registered on the platform.
- Single login system for all user roles, with functionalities displayed based on user role.
- Signup page for normal users to register on the platform.

## User Personas (Roles)

### System Admin

- Add stores, normal users, and admin users to the system.
- View dashboard with total users, total stores, and total ratings.
- Manage user and store listings with filtering options.
- View detailed information of all users and store ratings.

### Normal User

- Register and log in to the platform.
- Change password after login.
- View list of all registered stores.
- Search stores based on name and address.
- Submit and modify ratings for stores.
- Log out of the system.

### Store Owner

- Log in to the platform.
- Change password after login.
- View list of users who have submitted ratings for their store.
- View average rating of their store.
- Log out of the system.

## Form Validations

- Name: 20-60 characters.
- Address: Maximum 400 characters.
- Password: 8-16 characters, at least 1 uppercase and 1 special character.
- Email: Valid email format.

## Features

- Sorting functionality on important fields like name and email.
- Best practices followed on both frontend and backend.
- Proper table schema design on the database side.

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

### Directory Structure

```
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── .env
├── frontend
│   ├── public
│   ├── src
│   │   ├── actions
│   │   ├── components
│   │   ├── constants
│   │   ├── pages
│   │   ├── reducers
│   │   ├── store.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
└── README.md
```

### Important Files

- **Backend**
  - `server.js`: Entry point for the backend server.
  - `config/db.js`: Database configuration.
  - `models`: Contains Mongoose models for User and Store.
  - `routes`: Contains Express routes for authentication, user management, and store management.
  - `controllers`: Contains controller functions for handling requests.
  - `utils`: Contains utility functions like generating JWT.

- **Frontend**
  - `src/index.js`: Entry point for the React application.
  - `src/App.js`: Main application component.
  - `src/store.js`: Redux store configuration.
  - `src/actions`: Contains Redux actions.
  - `src/reducers`: Contains Redux reducers.
  - `src/pages`: Contains React components for different pages (Login, Register, Dashboard, StoreList).
  - `src/components`: Contains reusable React components (Header, PrivateRoute).

## Usage

1. **Admin**: Log in as an admin user to add stores, manage users, and view dashboard statistics.
2. **Normal User**: Register and log in to submit ratings for stores and view store details.
3. **Store Owner**: Log in to view ratings submitted for their store and manage their profile.

## Contributing

Contributions are welcome! Please create a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/)
```

This README provides a comprehensive overview of the project, its setup, and its usage. It also includes instructions for contributing and acknowledgements for the technologies used.
