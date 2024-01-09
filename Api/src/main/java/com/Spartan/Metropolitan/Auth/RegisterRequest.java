package com.Spartan.Metropolitan.Auth;
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
    
    @NotBlank (message = "Email is mandatory")
    @Email(message = "Email should be valid")
    String email;
    @NotBlank (message = "Password is mandatory")
    String password;
    String firstname;
    String lastname;
    String country;
   
    
}
