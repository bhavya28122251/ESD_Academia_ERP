package org.esdpracticals.academicerp.academicerp.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.esdpracticals.academicerp.academicerp.dto.FacultyCourseScheduleResponse;
import org.esdpracticals.academicerp.academicerp.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping("/courses")
    public ResponseEntity<List<FacultyCourseScheduleResponse>> getEmployeeCourses(HttpServletRequest request) {
        return ResponseEntity.ok(employeeService.getEmployeeCourses(request));
    }
}
