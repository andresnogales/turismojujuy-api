package com.andresnogales.turismojujuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.andresnogales.turismojujuy.service.LocationService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("api/locations")
public class LocationController {
	
	@Autowired
	private LocationService locationService;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getLocation(@PathVariable("id") Integer id){
		return new ResponseEntity<>(locationService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping("/region/{id}")
	public ResponseEntity<?> getLocationsByRegion(@PathVariable("id") Integer id){
		return new ResponseEntity<>(locationService.findByRegionId(id),HttpStatus.OK);
	}
}
