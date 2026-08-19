# Note-API

A RESTful API for creating, managing, searching, updating, and deleting notes.

Note-API is a backend development project built with Node.js, Express.js, MongoDB, and Mongoose. It follows a modular architecture with dedicated controllers, routes, models, middleware, validation, database configuration, and centralized error handling.

## 🎓 Course Information

Course: Backend Development Project
Year: 2026
Team: Group 1
Project: Note-API

## 🎯 Assignment Objective

The objective of this project is to build a complete Notes Management API with:

* RESTful CRUD operations
* MongoDB database integration
* Mongoose data modeling
* Request validation
* Centralized error handling
* Environment variable configuration
* Modular backend architecture
* Git and GitHub version control
* API testing
* Deployment

## ✨ Features

* Create notes
* Retrieve all notes
* Retrieve a single note
* Update notes
* Delete notes
* Search notes
* MongoDB data persistence
* MongoDB text indexing for note search
* Request validation with Joi
* Centralized error handling
* Environment-based configuration
* CORS support
* Modular project structure
* Development support with Nodemon
* API testing with Postman

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* JavaScript

### Database

* MongoDB
* Mongoose

### Validation

* Joi

### Development Tools

* Nodemon
* dotenv
* CORS
* Postman

### Version Control

* Git
* GitHub

## 👥 Team Members

| Name                     | Role                              | Responsibilities|
| ------------------------ | --------------------------------- | -------------------------------------------
| Jimoh Lukman             | Backend Developer                 | Middleware, routers, database connection, GitHub 
                                                                    repository management, deployment |

| Winstill Akoh Sani       | Backend Developer                 | README documentation, API development, GitHub,
                                                                deployment

| Innocent Eziefula        | Documentation & Presentation Lead | Team headshots and presentation slides|

| Kalu Lovelyn             | Backend Developer                 | Models and text search validation  |

| Onorwi Friday            | Backend Developer                 | Application entry point, App.js|

| Ukwubuiw Solomon Chinedu | Backend Developer                 | Controllers               |


## 📁 Project Structure

```text
Note-API/
│
├── controllers/
│   └── noteController.js
│
├── models/
│   └── noteModel.js
│
├── routes/
│   └── noteRoutes.js
│
├── middleware/
│   ├── errorHandler.js
│   └── noteValidators.js

│
├── config/
│   └── db.js
│
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

## 📋 Prerequisites

Before running the project, install:

* Node.js
* npm
* Git
* MongoDB or a MongoDB Atlas database
* Postman for API testing

Check your Node.js installation:

```bash
node --version
```

Check your npm installation:

```bash
npm --version
```

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/jaylukmann/Note-API.git
```

### 2. Enter the project directory

```bash
cd Note-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

Do not commit the `.env` file to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The API should start on the configured port.

Example:

```text
http://localhost:5001
```

### 6. Start the production server

Use the production command defined in `package.json`.

Example:

```bash
npm start
```

## 🔐 Environment Variables

The application uses environment variables to keep configuration and credentials outside the source code.

Example `.env` file:

```env
PORT=5001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/note-api
```

### Environment Variables

| Variable  | Description                     | Example           |
| --------- | ------------------------------- | ----------------- |
| PORT      | Port used by the Express server | 5001              |
| MONGO_URI | MongoDB connection string       | mongodb+srv://... |

Never upload database credentials, API keys, passwords, or other secrets to GitHub.

Add `.env` and `node_modules` to `.gitignore`:

```text
.env
node_modules/
```

## 🌐 API Base URL

### Local Development

```text
http://localhost:5001/api/notes
```

### Production

```text
https://note-api-dwsx.onrender.com/api/notes
```

## 📡 API Endpoints

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| POST   | `/api/notes`        | Create a note         |
| GET    | `/api/notes`        | Retrieve all notes    |
| GET    | `/api/notes/:id`    | Retrieve a note by ID |
| PUT    | `/api/notes/:id`    | Update a note         |
| DELETE | `/api/notes/:id`    | Delete a note         |
| GET    | `/api/notes/search` | Search notes          |

## 📝 API Usage

### Create Note

Creates a new note.

```http
POST https://note-api-dwsx.onrender.com/api/notes
```

Request body:

```json
{
  "title": "Learning Node.js",
  "content": "Study Express.js, MongoDB and REST APIs."
}
```

Example successful response:

```json
{
  "success": true,
  "message": "Note created successfully",
  "note": {
    "_id": "NOTE_ID",
    "title": "Learning Node.js",
    "content": "Study Express.js, MongoDB and REST APIs."
  }
}
```

### Get All Notes

Retrieves all notes.

```http
GET https://note-api-dwsx.onrender.com/api/notes
```

### Get Note

Retrieves a specific note using its MongoDB ID.

```http
GET https://note-api-dwsx.onrender.com/api/notes/:id
```

### Update Note

Updates an existing note.

```http
PUT https://note-api-dwsx.onrender.com/api/notes:id
```

Request body:

```json
{
  "title": "Updated Node.js Notes",
  "content": "Updated note content."
}
```
### Delete Note

Deletes a note using its ID.

```http
DELETE https://note-api-dwsx.onrender.com/api/notes:id
```

## 🔎 Search

Note-API supports searching notes using MongoDB text indexes.

The searchable fields are:
* `title`
* `content`

Example:

```text
GET https://note-api-dwsx.onrender.com/api/notes/search?query=javascript
```
A search for `javascript` returns notes where the indexed fields contain the search term.

The exact search route and query parameter should match the implementation in the repository.

## 🗄️ Database Schema

The Note model stores the information required to manage notes.

| Field     | Type   | Required  | Description                    |
| --------- | ------ | --------- | ------------------------------ |
| title     | String | Yes       | Title of the note              |
| content   | String | Yes       | Main content of the note       |
| category  | String | No        | Category of the note. Default is general|
| tags      | Date   | No        | an array of tags at least 2 |
| createdAt | Date   | Automatic | Date the note was created      |
| updatedAt | Date   | Automatic | Date the note was last updated |

MongoDB stores each note as a document.

Mongoose handles schema definition, validation, database operations, and timestamps.

## ✅ Validation

The API validates incoming request data before processing it.

Validation covers:

* Required fields
* Field data types
* Note title
* Note content
* MongoDB note IDs
* Search input
* Invalid request data

Joi handles request validation where configured.

Example invalid request:

```json
{
  "title": ""
}
```

The API returns an appropriate validation error instead of storing invalid data.

## ⚠️ Error Handling

The application uses centralized error-handling middleware.

The API returns JSON responses for application errors.

Example:

```json
{
  "success": false,
  "message": "Note not found"
}
```

Common errors include:

* Invalid request data
* Invalid MongoDB ID
* Note not found
* Database connection errors
* Internal server errors

## 📊 HTTP Status Codes

| Status Code | Meaning                             |
| ----------- | ----------------------------------- |
| 200         | Request successful                  |
| 201         | Resource created successfully       |
| 400         | Invalid request or validation error |
| 404         | Resource not found                  |
| 500         | Internal server error               |

## 🧪 Testing

The API should be tested with Postman or another REST API client.

### CRUD Tests

Test the following operations:

```text
POST /api/notes
GET /api/notes
GET /api/notes/:id
PUT /api/notes/:id
DELETE /api/notes/:id
```

### Validation Tests

Test:

* Empty title
* Empty content
* Missing required fields
* Invalid note ID
* Non-existent note ID
* Invalid search input

### Database Tests

Verify:

* Notes are saved to MongoDB
* Notes are retrieved correctly
* Updates persist in MongoDB
* Deleted notes no longer appear
* Search returns matching notes

## 🌿 Git Workflow

The project uses Git and GitHub for source control.

A typical workflow:

```bash
git pull origin main
```

Create a feature branch:

```bash
git checkout -b feature-name
```

Check changed files:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Add note search functionality"
```

Push the branch:

```bash
git push origin feature-name
```

Pull the latest changes before starting new work:

```bash
git pull origin main
```

Use clear commit messages describing the change.

Examples:

```text
Add note controller
Add note validation
Fix database connection
Add text search
Update API documentation
```

## 🚀 Deployment

The application uses MongoDB for persistent data storage.

For production deployment:

1. Push the project to GitHub.
2. Create a MongoDB Atlas database.
3. Configure the production environment variables.
4. Connect the deployment platform to the GitHub repository.
5. Set the build and start commands.
6. Add the `MONGO_URI` environment variable.
7. Deploy the application to render.
8. Test every API endpoint using the production URL.

### Production Environment

Configure:

```env
PORT=5001
MONGO_URI=your_production_mongodb_connection_string
```

Do not expose production database credentials in the repository.

### Production API

```text
https://note-api-dwsx.onrender.com/api/notes
```

## 🎥 Project Demo and Presentation

A video demonstration should cover:

1. Project introduction
2. Project structure
3. Database connection
4. API endpoints
5. Creating a note
6. Retrieving notes
7. Retrieving a single note
8. Updating a note
9. Deleting a note
10. Searching notes
11. Validation
12. Error handling
13. Deployment

Demo video:

```text

```

## 🤝 Contribution

Contributions should follow the team's Git workflow.

1. Pull the latest changes from `main`.
2. Create a feature branch.
3. Implement the feature or fix.
4. Test the changes.
5. Commit the changes with a clear message.
6. Push the branch to GitHub.
7. Submit the changes for review according to the team's workflow.

Keep controllers, routes, models, middleware, and configuration code separated according to the project structure.

## 📄 License

This project was developed as part of the Backend Development Project 2026 course under BeTechified.

Copyright © 2026 Group 1.

## 📌 Project Status

Current project status:

```text
Development
```

The project is being developed as a course project and includes RESTful CRUD operations, MongoDB persistence, validation, text search, error handling, testing, version control, and deployment.

## 🔗 Repository

GitHub repository:

https://github.com/jaylukmann/Note-API.git

## 👨‍💻 Team

Group 1
Backend Development Project 2026
