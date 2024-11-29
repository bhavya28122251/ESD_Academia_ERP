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
1. Clone the repository and navigate to the project directories. 
2. For the frontend, go to the `esd_react` folder
3. Install dependencies using
   ```bash
   npm install
4. Start the server with
   ```bash
  npm start

 ### Backend
1. Go to the `Academic-ERP` folder
2. Open the project in IntelliJ IDEA or your preferred IDE
3. Configure the database settings in the `application.properties` file
  ```bash
    -`spring.datasource.url=jdbc:mysql://localhost:3306/timetable`
    -`spring.datasource.username=your_db_username`
    -`spring.datasource.password=your_db_password`
4. Finally, run the Spring Boot application through your IDE or use the command `./mvnw spring-boot:run`
5. Access the frontend at `http://localhost:3000` and the backend APIs at `http://localhost:8080`.

