package org.esdpracticals.academicerp.academicerp.mapper;

import org.esdpracticals.academicerp.academicerp.dto.StudentDetailsDTO;
import org.esdpracticals.academicerp.academicerp.entity.Student;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {
    public StudentDetailsDTO entityToDTO(Student student) {
        if (student == null) {return null;}
        return StudentDetailsDTO.builder()
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .email(student.getEmail())
                .photographPath(student.getPhotographPath())
                .rollNumber(student.getRollNumber())
                .build();
    }
}
