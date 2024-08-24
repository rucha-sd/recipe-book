
# Recipe App

## Overview

The Recipe App is a web application that allows users to browse and view detailed recipes. The project is built with a React.js frontend and a Django backend. The application features categories for different types of dishes (Appetizers, Main Courses, Desserts) and provides detailed recipe instructions for each dish.

## Features

- Browse a list of recipes categorized by type.
- View detailed recipe information including ingredients and instructions.
- Filter recipes by category.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Django, Django REST framework
- **Database**: SQLite (default with Django)

## Project Structure

The project is divided into two main directories:

1. **backend**: Contains the Django project, including models, views, and API endpoints.
2. **frontend**: Contains the React.js project, including components, styles, and API calls.

## Setup Instructions

### 1. Clone the Repository

Start by cloning the repository to your local machine:

\`\`\`bash
git clone https://github.com/rucha-sd/recipe-app.git
cd recipe-app
\`\`\`

### 2. Backend Setup (Django)

1. **Navigate to the Backend Directory**:

   \`\`\`bash
   cd backend
   \`\`\`

2. **Create a Virtual Environment**:

   \`\`\`bash
   python -m venv env
   \`\`\`

3. **Activate the Virtual Environment**:

   - **On macOS/Linux**:
     \`\`\`bash
     source env/bin/activate
     \`\`\`
   - **On Windows**:
     \`\`\`bash
     env\Scripts\activate
     \`\`\`

4. **Install Backend Dependencies**:

   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

5. **Apply Migrations**:

   \`\`\`bash
   python manage.py migrate
   \`\`\`

6. **Run the Django Development Server**:

   \`\`\`bash
   python manage.py runserver
   \`\`\`

   The backend should now be running at \`http://localhost:8000\`.

### 3. Frontend Setup (React.js)

1. **Navigate to the Frontend Directory**:

   \`\`\`bash
   cd ../frontend
   \`\`\`

2. **Install Frontend Dependencies**:

   \`\`\`bash
   npm install
   \`\`\`

3. **Run the React Development Server**:

   \`\`\`bash
   npm start
   \`\`\`

   The frontend should now be running at \`http://localhost:3000\`.

### 4. Access the Application

Once both the backend and frontend servers are running, you can access the application by navigating to \`http://localhost:3000\` in your web browser.

## API Endpoints

- **Get All Menu Items**: \`http://localhost:8000/api/menu/\`
- **Get Menu Item by Name**: \`http://localhost:8000/api/menu/<name>/\`
- **Get Menu Items by Category**: \`http://localhost:8000/api/menu/category/<category>/\`

