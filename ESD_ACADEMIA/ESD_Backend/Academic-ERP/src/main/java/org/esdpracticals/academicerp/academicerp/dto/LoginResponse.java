package org.esdpracticals.academicerp.academicerp.dto;

import jakarta.validation.constraints.NotNull;

public record LoginResponse(
        @NotNull
        Boolean authenticated,
        @NotNull
        String message,
        String jwt
) {
}
