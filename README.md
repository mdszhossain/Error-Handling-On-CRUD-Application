# Employee Management System

A simple Express + EJS CRUD application for managing employee records using MongoDB and Mongoose.

## Project Details

This application provides a basic employee management interface with create, read, update, and delete functionality.

Key features:
- Server-side rendering with EJS and layouts
- MongoDB database integration with Mongoose
- Custom error handling using `ExpressError`
- CRUD operations for employee records
- Simple responsive UI with shared CSS styles

## Directory Structure

```
Error-Handling-On-CRUD-Application/
├── app.js
├── ExpressError.js
├── package.json
├── package-lock.json
├── database/
│   ├── data.js
│   └── init.js
├── logic/
│   ├── createRoute.js
│   ├── deleteRoute.js
│   ├── editRoute.js
│   ├── indexRoute.js
│   ├── newRoute.js
│   ├── showRoute.js
│   └── updateLogic.js
├── models/
│   └── employee.js
├── public/
│   └── css/
│       └── style.css
└── views/
    ├── edit.ejs
    ├── index.ejs
    ├── new.ejs
    ├── show.ejs
    ├── layouts/
    │   └── boilerplate.ejs
    └── includes/
        └── navbar.ejs
```

## API Routes

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/` | Redirect to `/employees` |
| GET | `/employees` | List all employees |
| GET | `/employees/new` | Show form to create a new employee |
| POST | `/employees` | Create a new employee record |
| GET | `/employees/:id` | Show details for one employee |
| GET | `/employees/:id/edit` | Show edit form for an employee |
| PATCH | `/employees/:id` | Update an employee record |
| DELETE | `/employees/:id` | Delete an employee record |

## Notes

- The app uses `method-override` to support `PATCH` and `DELETE` via HTML forms.
- Views are rendered using `ejs-mate` template layouts.
- Static CSS is served from `public/css/style.css`.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node app.js
   ```
3. Open the app at `http://localhost:8080`
