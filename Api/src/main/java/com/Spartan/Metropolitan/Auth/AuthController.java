
package com.Spartan.Metropolitan.Auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
  
    private final AuthService authService;
    
    
    @PostMapping(value="login")
    public ResponseEntity <AuthResponse> login(@RequestBody LoginRequest request)
    {
     return ResponseEntity.ok(authService.login(request));
    }
            
    
    
    @PostMapping(value="register")
    public ResponseEntity<String>  register(@Valid @RequestBody RegisterRequest request) throws Exception 
    {
        
        authService.register(request);
        
    return ResponseEntity.ok("Registration was successful");    
    }
    
    
}
