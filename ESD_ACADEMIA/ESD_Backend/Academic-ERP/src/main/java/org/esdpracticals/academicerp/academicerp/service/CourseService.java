package org.esdpracticals.academicerp.academicerp.service;

import lombok.RequiredArgsConstructor;
import org.esdpracticals.academicerp.academicerp.dto.StudentDetailsDTO;
import org.esdpracticals.academicerp.academicerp.mapper.StudentMapper;
import org.esdpracticals.academicerp.academicerp.repo.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final StudentMapper studentMapper;

    public List<StudentDetailsDTO> getCourseStudents(String courseCode) {
        return courseRepository.findStudentsByCourseCode(courseCode)
                .stream().map(studentMapper::entityToDTO).toList();
    }
}