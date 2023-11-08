package com.Spartan.Metropolitan.Controller;


import com.Spartan.Metropolitan.User.Role;
import com.Spartan.Metropolitan.User.User;
import com.Spartan.Metropolitan.User.UserRepository;
import com.Spartan.Metropolitan.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    
    
    public AuthResponse login(LoginRequest request) {
    return null;
    }
    
    public AuthResponse register(RegisterRequest request) throws Exception{
         
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new Exception("Email already in use");
        }
        
        User user = User.builder()
                .firstname(request.getFirstname())
                .username(request.getUsername())
                .lastname(request.getLastname())
                .password(passwordEncoder.encode(request.getPassword()))
                .country(request.getCountry())
                .email(request.getEmail())
                .role(Role.USER)
                .build();

        
        userRepository.save(user);

        
        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }

 

    
}
