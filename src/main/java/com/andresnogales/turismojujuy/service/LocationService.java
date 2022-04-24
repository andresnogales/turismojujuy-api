package com.andresnogales.turismojujuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.Location;
import com.andresnogales.turismojujuy.repository.ILocationRepository;

@Service
public class LocationService {
	
	@Autowired
	private ILocationRepository locationRepository;
	
	public Location findById(int id){
		Location location = locationRepository.findById(id);
		if (location == null) {
			throw new RuntimeException("Location not found");
		}
		return location;		
	}
	
	public List<Location> findByRegionId(int id){
		return locationRepository.findByRegionId(id);
	}
}
