package com.andresnogales.turismojujuy.security.jwt;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;

import com.andresnogales.turismojujuy.security.UserPrincipal;

public interface IJwtProvider {
	String generateToken(UserPrincipal auth);
	Authentication getAuthentication(HttpServletRequest request);
	boolean validateToken(HttpServletRequest request);
}
