package com.andresnogales.turismojujuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.Region;
import com.andresnogales.turismojujuy.repository.IRegionRepository;

@Service
public class RegionService {
	
	@Autowired
	private IRegionRepository regionRepository;
	
	public Region findById(int id) {
		Region region = regionRepository.findById(id);
		if(region == null) {
			throw new RuntimeException("Region not found");
		}
		return region;
	}
	
	public List<Region> findAll(){
		return regionRepository.findAll();
	}

}
