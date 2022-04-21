package com.andresnogales.turismojujuy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.User;
import com.andresnogales.turismojujuy.security.UserPrincipal;
import com.andresnogales.turismojujuy.security.jwt.IJwtProvider;

@Service
public class AuthenticationService{

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private IJwtProvider jwtProvider;

	public User signInAndReturnJWT(User signRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(signRequest.getUsername(), signRequest.getPassword()));
		
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
		String jwt = jwtProvider.generateToken(userPrincipal);
		
		User signInUser = userPrincipal.getUser();
		signInUser.setToken(jwt);
		
		return signInUser;
	}	
}
