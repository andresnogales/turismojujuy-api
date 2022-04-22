package com.andresnogales.turismojujuy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.andresnogales.turismojujuy.model.Location;

public interface ILocationRepository extends CrudRepository<Location, Integer> {

	public Location findById(int id);
	public List<Location> findByRegionId(int id);
}
