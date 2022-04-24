package com.andresnogales.turismojujuy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.andresnogales.turismojujuy.model.Region;

public interface IRegionRepository extends CrudRepository<Region, Integer> {

	public Region findById(int id);
	public List<Region> findAll();
}
