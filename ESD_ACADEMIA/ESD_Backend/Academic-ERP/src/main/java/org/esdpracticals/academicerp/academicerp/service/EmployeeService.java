package org.esdpracticals.academicerp.academicerp.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.esdpracticals.academicerp.academicerp.dto.LoginRequest;
import org.esdpracticals.academicerp.academicerp.dto.LoginResponse;
import org.esdpracticals.academicerp.academicerp.entity.Employee;
import org.esdpracticals.academicerp.academicerp.repo.EmployeeRepository;
import org.esdpracticals.academicerp.academicerp.config.Role;
import org.esdpracticals.academicerp.academicerp.dto.*;
import org.esdpracticals.academicerp.academicerp.entity.Employee;
//import org.esdpracticals.academicerp.academicerp.jwt.JwtHelper;
import org.esdpracticals.academicerp.academicerp.repo.EmployeeRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final org.esdpracticals.academicerp.academicerp.djwt.JwtHelper jwtHelper;
    private final EmployeeRepository employeeRepository;
    private final EncryptionService encryptionService;

    public LoginResponse login(@Valid LoginRequest loginRequest) {
        String email = loginRequest.email();
        String password = loginRequest.password();

        Employee employee = employeeRepository.findByEmail(email);

        if (employee == null || !encryptionService.verifyPassword(password, employee.getPassword())) {
            return new LoginResponse(false, "Invalid email or password", null);
        }

        String token = jwtHelper.generateToken(Role.EMPLOYEE, employee.getEmployeeId());

        return new LoginResponse(true, "Authenticated", token);
    }

    public List<FacultyCourseScheduleResponse> getEmployeeCourses(HttpServletRequest request) {
        String role = (String) request.getAttribute("role");
        if (!role.equals(Role.EMPLOYEE)) throw new AccessDeniedException("Access Denied");
        Long userId = (Long) request.getAttribute("userId");

        return employeeRepository.findCoursesByEmpId(userId);
    }
}
