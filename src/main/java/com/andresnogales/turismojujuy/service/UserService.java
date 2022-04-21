package com.andresnogales.turismojujuy.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.Role;
import com.andresnogales.turismojujuy.model.User;
import com.andresnogales.turismojujuy.repository.IUserRepository;

@Service
public class UserService {

	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;


	public User saveUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setRole(Role.USER);
		user.setCreateTime(LocalDateTime.now());	
		
		return userRepository.save(user);	
	}


	public Optional<User> findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

}