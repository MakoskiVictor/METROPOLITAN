package com.Spartan.Metropolitan.Controller;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    
    String username;
    @NotBlank (message = "Password is mandatory")
    String password;
    String firstname;
    String lastname;
    String country;
    @NotBlank (message = "Email is mandatory")
    @Email(message = "Email should be valid")
    String email;
    
}
