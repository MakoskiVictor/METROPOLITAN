/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Spartan.Metropolitan.Config;

import com.Spartan.Metropolitan.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 *
 * @author arroyos
 */
@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    
    
    public final UserRepository userRepository;
    
    
    @Bean
    public AuthenticationManager AuthenticationManager(AuthenticationConfiguration config) throws Exception
    {
    return config.getAuthenticationManager();
    }
    
    @Bean
    public AuthenticationProvider AuthenticationProvider() {
      DaoAuthenticationProvider authenticationProvider = new  DaoAuthenticationProvider();
     authenticationProvider.setUserDetailsService(userDetailsService());
     authenticationProvider.setPasswordEncoder(passwordEncoder());
     return authenticationProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();            
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));  
    }

  
    
}
