package com.andresnogales.turismojujuy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.andresnogales.turismojujuy.model.Article;
import com.andresnogales.turismojujuy.model.Category;


public interface IArticleRepository extends CrudRepository<Article, Integer>  {

	public Article findById(int id);
	public List<Article> findAll();
	public List<Article> findByArticleCategories(Category category);
	
	@Query("select a from Article a inner join Location l on l.id = a.locationId where l.regionId = :id")
	public List<Article> findByRegion(int id);
}
