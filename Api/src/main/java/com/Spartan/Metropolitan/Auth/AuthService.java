package com.Spartan.Metropolitan.Auth;


import com.Spartan.Metropolitan.User.Role;
import com.Spartan.Metropolitan.User.User;
import com.Spartan.Metropolitan.User.UserRepository;
import com.Spartan.Metropolitan.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    
    public AuthResponse login(LoginRequest request) {
    
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
    
        UserDetails user= userRepository.findByEmail(request.getEmail()).orElseThrow();
        
        String token = jwtService.getToken(user);
        
        return AuthResponse.builder()
                .token(token)
                .build();
        
        
    }
    
    public void register(RegisterRequest request) throws Exception{
         
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new Exception("Email already in use");
        }
        
        User user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .password(passwordEncoder.encode(request.getPassword()))
                .country(request.getCountry())
                .email(request.getEmail())
                .role(Role.USER)
                .build();

        
        userRepository.save(user);

        
       
    }

 

    
}
