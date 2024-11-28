INSERT INTO Courses (course_code, name, description, `year`, term, faculty, credits, capacity)
VALUES
    ('CSAI101', 'Introduction to Artificial Intelligence', 'Covers the basics of AI.', 2024, 'Fall', 'Dr. Suresh Reddy', 4, 50),
    ('CSDS101', 'Introduction to Data Science', 'Basics of data analysis and visualization.', 2024, 'Spring', 'Dr. Anjali Sharma', 4, 60),
    ('CSCY101', 'Introduction to Cybersecurity', 'Introduction to securing systems.', 2024, 'Fall', 'Dr. Ramesh Mehta', 4, 50),
    ('CSAI201', 'Machine Learning', 'Covers supervised and unsupervised learning.', 2024, 'Spring', 'Dr. Sneha Patel', 4, 50),
    ('CSDS201', 'Data Mining', 'Explores patterns in large datasets.', 2024, 'Fall', 'Dr. Arun Kumar', 4, 50),
    ('CSCY201', 'Network Security Fundamentals', 'Basics of network security.', 2024, 'Spring', 'Dr. Priya Nair', 3, 50),
    ('CSAI301', 'Deep Learning', 'Advanced neural networks.', 2024, 'Fall', 'Dr. Vikram Singh', 4, 40),
    ('CSDS301', 'Big Data Analytics', 'Focus on large-scale data systems.', 2024, 'Spring', 'Dr. Kavita Rao', 4, 40),
    ('CSCY301', 'Ethical Hacking', 'Learn penetration testing ethically.', 2024, 'Fall', 'Dr. Rajesh Gupta', 4, 40),
    ('CSAI401', 'Natural Language Processing', 'Language modeling and sentiment analysis.', 2024, 'Spring', 'Dr. Rohit Joshi', 4, 50);

INSERT INTO Specialisation (code, name, description, `year`, credits_required)
VALUES
    ('AI', 'Artificial Intelligence', 'Focus on AI technologies.', 4, 120),
    ('DS', 'Data Science', 'Specialization in data technologies.', 4, 115),
    ('CY', 'Cybersecurity', 'Expertise in security systems.', 4, 110);

INSERT INTO Students (roll_number, first_name, last_name, email, cgpa, total_credits, `year`, specialisation)
VALUES
    ('21CSAI01', 'Rahul', 'Sharma', 'rahul.sharma@example.com', 3.9, 105, 4, 1),
    ('21CSAI02', 'Priya', 'Gupta', 'priya.gupta@example.com', 3.8, 100, 3, 1),
    ('21CSDS01', 'Ananya', 'Iyer', 'ananya.iyer@example.com', 3.7, 98, 3, 2),
    ('21CSDS02', 'Ravi', 'Mishra', 'ravi.mishra@example.com', 3.6, 95, 4, 2),
    ('21CSCY01', 'Pooja', 'Menon', 'pooja.menon@example.com', 3.5, 90, 2, 3),
    ('21CSCY02', 'Amit', 'Patil', 'amit.patil@example.com', 3.4, 88, 2, 3);
