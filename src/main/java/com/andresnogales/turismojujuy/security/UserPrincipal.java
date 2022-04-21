package com.andresnogales.turismojujuy.security;

import java.util.Collection;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.andresnogales.turismojujuy.model.User;
import com.andresnogales.turismojujuy.model.Role;
import com.andresnogales.turismojujuy.util.SecurityUtils;

@SuppressWarnings("serial")
public class UserPrincipal implements UserDetails{

	private Long id;
	private String username;
	transient private String password;
	transient private User user;
	private Set<GrantedAuthority> authorities;
	
	public UserPrincipal() {
	}
	
	public UserPrincipal(Long id, String username, String password, User user, Set<GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.user = user;
		this.authorities = authorities;
	}
	
	public static UserPrincipal createRootUser() {
		Set<GrantedAuthority> authorities = Set.of(SecurityUtils.convertToAuthority(Role.SYSTEM_MANAGER.name()));
		UserPrincipal userPrincipal = new UserPrincipal();
		userPrincipal.setId(-1L);
		userPrincipal.setUsername("system-administrator");
		userPrincipal.setAuthorities(authorities);
		return userPrincipal;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}	

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public Long getId() {
		return id;
	}

	public User getUser() {
		return user;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAuthorities(Set<GrantedAuthority> authorities) {
		this.authorities = authorities;
	}
}
