# Fitness Tracker App

## Overview
The Fitness Tracker App is a full-stack application designed to help users track their workouts, view progress, and analyze fitness data. The project includes both a **frontend** built with React and a **backend** powered by Node.js and Firebase Firestore.

## Features
- **User Workouts**: Add, view, and delete workouts.
- **Firebase Integration**: Securely store data using Firestore.
- **RESTful API**: Provides endpoints for managing workout data.
- **Responsive Design**: Optimized for mobile and desktop use.
- **Scalable Architecture**: Designed for future enhancements like authentication and analytics.

---

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** (Node Package Manager)
- **Firebase CLI** (for deployment)
- **React** (for frontend development)

---

## Project Structure
```
fitness-app/
├── backend/                   # Backend folder
│   ├── src/
│   │   ├── config/
│   │   │   └── firebase.js    # Firebase Admin SDK configuration
│   │   ├── routes/
│   │   │   └── workouts.js    # Workout-related API routes
│   │   ├── index.js           # Express server entry point
│   ├── .env                   # Environment variables
│   ├── package.json           # Backend dependencies and scripts
│   └── .gitignore             # Ignored files and folders
├── frontend/                  # Frontend folder
│   ├── public/                # Static files
│   │   └── index.html         # Main HTML file
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Header.jsx     # Header component
│   │   │   ├── Footer.jsx     # Footer component
│   │   │   ├── WorkoutCard.jsx # Card for displaying workouts
│   │   │   ├── WorkoutForm.jsx # Form for adding/editing workouts
│   │   │   └── StatsCard.jsx  # Component for displaying statistics
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx       # Dashboard
│   │   │   ├── AddWorkout.jsx # Add workouts
│   │   │   ├── History.jsx    # Workout history
│   │   │   └── Stats.jsx      # Statistics page
│   │   ├── context/           # State management
│   │   │   └── WorkoutContext.jsx # Context API for workouts
│   │   ├── firebase.js        # Frontend Firebase configuration
│   │   ├── App.jsx            # Main React app
│   │   ├── index.jsx          # React entry point
│   │   ├── styles/
│   │   │   ├── global.css     # Global styles
│   │   │   └── components.css # Component-specific styles
│   │   └── utils/
│   │       └── helpers.js     # Utility functions
│   ├── package.json           # Frontend dependencies and scripts
│   └── .gitignore             # Ignored files and folders
├── README.md                  # Project documentation
└── .gitignore                 # Ignore files for the entire project
```

---

## Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/Moody24/fitness-app.git
cd fitness-app
```

### **2. Backend Setup**
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Download the service account key from Firebase Console.
   - Place it in `backend/src/config/` and name it `serviceAccountKey.json`.

4. Set environment variables:
   - Create a `.env` file:
     ```env
     PORT=5000
     ```

5. Start the backend server:
   ```bash
   node src/index.js
   ```
   The server should now run on `http://localhost:5000`.

### **3. Frontend Setup**
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The app should now run on `http://localhost:3000`.

---

## API Endpoints

### **Backend Base URL:**
```
http://localhost:5000/api/workouts
```

### **1. Get All Workouts**
Retrieve all workouts for a specific user.

- **Endpoint:** `GET /`
- **Query Parameters:**
  - `userId` (string, required): The user ID to filter workouts.
- **Response:**
  ```json
  [
    {
      "id": "workout1",
      "userId": "user123",
      "type": "Running",
      "duration": 30,
      "date": "2025-01-14",
      "caloriesBurned": 200
    }
  ]
  ```

### **2. Add a Workout**
Add a new workout for a user.

- **Endpoint:** `POST /`
- **Body:**
  ```json
  {
    "userId": "user123",
    "type": "Running",
    "duration": 30,
    "date": "2025-01-14",
    "caloriesBurned": 200
  }
  ```
- **Response:**
  ```json
  {
    "id": "newWorkoutId",
    "userId": "user123",
    "type": "Running",
    "duration": 30,
    "date": "2025-01-14",
    "caloriesBurned": 200
  }
  ```

### **3. Delete a Workout**
Delete a workout by its ID.

- **Endpoint:** `DELETE /:id`
- **Path Parameters:**
  - `id` (string, required): The ID of the workout to delete.
- **Response:**
  ```json
  {
    "message": "Workout deleted"
  }
  ```

---

## Deployment on Firebase Hosting

### **Backend Deployment**
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```
   - Select **Hosting** for the frontend.
   - Select **Functions** for backend deployment if desired.

4. Deploy:
   ```bash
   firebase deploy
   ```

### **Frontend Deployment**
1. Build the React app:
   ```bash
   npm run build
   ```

2. Deploy the frontend:
   ```bash
   firebase deploy
   ```

---

## Future Enhancements
- **Authentication**: Secure the API and frontend with Firebase Authentication.
- **Real-Time Updates**: Enable live updates using Firestore listeners.
- **Enhanced Analytics**: Provide users with more detailed fitness insights.

---

## License
This project is licensed under the MIT License.

