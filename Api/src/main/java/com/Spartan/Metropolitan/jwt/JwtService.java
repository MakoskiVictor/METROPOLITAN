/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Spartan.Metropolitan.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

/**
 *
 * @author arroyos
 */

@Service 
public class JwtService {

    private static final String SECRET_KEY ="f4a92c8b73d08e4a12b6435f0dc72a48e5b239abefdcd9e7a19823f489f015dc";
    
    
    public String getToken(UserDetails user) {
        return getToken(new HashMap<>(), user);
    }

    private String getToken(Map<String,Object> extraClaims, UserDetails user) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(user.getUsername())
                .setIssuedAt(new Date (System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
                
    }

    private Key getKey() {
        byte[] keyBytes=Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    String getEmailFromToken(String token) {
        return getClaim(token,Claims::getSubject);

    }

    boolean isTokenValid(String token, UserDetails userDetails) {
        final String username=getEmailFromToken(token);
        
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));

    }
 
    private Claims getAllClaims(String token) {
    return Jwts.parserBuilder()
            .setSigningKey(getKey())
            .build()
            .parseClaimsJws(token)
            .getBody(); 
    }
    
    public <T> T  getClaim(String token, Function <Claims,T> claimsResolver){
        final Claims claims = getAllClaims(token);
        
        return claimsResolver.apply(claims);
    }
    
    private Date getExpiration(String token){
        return getClaim(token,Claims::getExpiration);
    }
    
    private boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }
    
    
}
