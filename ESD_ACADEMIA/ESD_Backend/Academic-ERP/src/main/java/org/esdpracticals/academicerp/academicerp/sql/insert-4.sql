INSERT INTO Faculty_Courses (faculty, course_id)
VALUES
    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10);

INSERT INTO Specialisation_Course (specialisation_id, course_id)
VALUES
    (1, 1), (1, 4), (2, 2), (2, 5), (3, 3), (3, 6);

INSERT INTO Student_Courses (student_id, course_id)
VALUES
    (1, 1), (1, 4), (2, 1), (2, 4),
    (3, 2), (3, 5), (4, 2), (4, 5),
    (1,2),(1,3),(1,5),(1,4),(1,6),(1,7),(2,3),(2,5),(2,4),(3,6),(2,7),(4,6),(3,5),(3,4),(3,3),(3,2);
INSERT INTO Course_Schedule (course_id, `time`, day, room, building)
VALUES
    (1, 1, 1, '101', 'Building A'),
    (2, 2, 2, '102', 'Building A'),
    (3, 3, 3, '103', 'Building B'),
    (4, 4, 4, '104', 'Building B'),
    (5, 1, 2, '105', 'Building C'),
    (6, 2, 3, '106', 'Building C'),
    (7, 3, 4, '107', 'Building D'),
    (8, 4, 5, '108', 'Building D'),
    (9, 1, 3, '109', 'Building E'),
    (10, 2, 4, '110', 'Building E');
