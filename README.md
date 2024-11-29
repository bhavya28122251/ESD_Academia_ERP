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
- **Frontend**: React, Bootstrap,CSS
- **Backend**: Spring Boot, JPA, Hibernate  
- **Database**: MySQL  
- **Authentication**: JWT Tokens  

---

## Project Structure

### Frontend (React)
- **Directory**: `/esd_react`
- **Key Components**:
  - **Login**: Faculty authentication form.
  - **Timetable**: Displays courses with time,specialization and room number.
  - **CourseDetails**: Shows students enrolled in a selected course.

### Backend (Spring Boot)
- **Directory**: `/Academic_ERP`
- **Key Layers**:
  - **Controller**: REST APIs for login, timetable, and enrolled students.
  - **Service**: Business logic for fetching and validating data.
  - **Repository**: JPA repositories for database interactions.
  - **Entities**: Models for `Faculty`, `Course`, and `Student`.

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Java Development Kit (JDK) installed
- Spring Boot setup with Maven
- A configured database

### Frontend
1. Navigate to the esd_react directory.
2. Install dependencies:  
   ``bash
   npm run
3. Start Frontend:  
   ```bash
   npm start

### Backtend
1. Navigate to the Academic-ERP directory.
2. Install dependencies:  
- Open this with Intellij IDEA
3. Run the project
