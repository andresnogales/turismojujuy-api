package com.andresnogales.turismojujuy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.andresnogales.turismojujuy.model.Article;
import com.andresnogales.turismojujuy.model.Region;

public interface IRegionRepository extends CrudRepository<Region, Integer> {

	public Region findById(int id);
	public List<Region> findAll();
	
	@Query("select a from Article a inner join Location l on l.id = a.locationId where l.regionId = :id")
	public List<Article> findArticles(int id);
}
