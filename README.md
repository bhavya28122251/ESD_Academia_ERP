# Faculty Display Timetable

## Overview
This mini-project is part of a larger academic management system and implements the **Faculty Display Timetable** feature. It allows faculty members to:
1. Log in securely.
2. View their complete timetable for all courses they teach, including details like specialization and room numbers.
3. Select a course to view the list of enrolled students.

---

## Features
- Faculty authentication.
- Timetable display with specialization and room details.
- View students enrolled in a specific course.

---

## Tech Stack
- **Frontend**: React, Bootstrap  
- **Backend**: Spring Boot, JPA, Hibernate  
- **Database**: MySQL  
- **Authentication**: JWT Tokens  

---

## Project Structure

### Frontend (React)
- **Directory**: `/faculty-timetable-frontend`
- **Key Components**:
  - **Login**: Faculty authentication form.
  - **Timetable**: Displays courses with specialization and room details.
  - **CourseDetails**: Shows students enrolled in a selected course.

### Backend (Spring Boot)
- **Directory**: `/faculty-timetable-backend`
- **Key Layers**:
  - **Controller**: REST APIs for login, timetable, and enrolled students.
  - **Service**: Business logic for fetching and validating data.
  - **Repository**: JPA repositories for database interactions.
  - **Entities**: Models for `Faculty`, `Course`, and `Student`.

---

## Setup Instructions

### Prerequisites
- Install Node.js and npm.
- Install JDK (Java Development Kit).
- Install a MySQL database and configure schema.

### Frontend Setup
1. Navigate to the `/faculty-timetable-frontend` directory:
   ```bash
   cd faculty-timetable-frontend
