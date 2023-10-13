/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Spartan.Metropolitan.User;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author arroyos
 */
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
    
}
    

