package com.andresnogales.turismojujuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.andresnogales.turismojujuy.service.RegionService;

@RestController
@RequestMapping("api/region")
public class RegionController {
	
	@Autowired
	private RegionService regionService;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getRegion(@PathVariable("id") Integer id){
		return new ResponseEntity<>(regionService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<?> getRegions(){
		return new ResponseEntity<>(regionService.findAll(),HttpStatus.OK);
	}
}
