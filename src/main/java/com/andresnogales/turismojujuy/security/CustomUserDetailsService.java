package com.andresnogales.turismojujuy.security;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.User;
import com.andresnogales.turismojujuy.service.UserService;
import com.andresnogales.turismojujuy.util.SecurityUtils;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserService userService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = userService.findByUsername(username).
				orElseThrow(() -> new UsernameNotFoundException(username + "  not found"));
		
		Set<GrantedAuthority> authorities = Set.of(SecurityUtils.convertToAuthority(user.getRole().name()));
		
		UserPrincipal userPrincipal = new UserPrincipal();
		userPrincipal.setId(user.getId());
		userPrincipal.setUsername(username);
		userPrincipal.setPassword(user.getPassword());
		userPrincipal.setAuthorities(authorities);
		userPrincipal.setUser(user);
		return userPrincipal;
	}

}
