package com.andresnogales.turismojujuy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.andresnogales.turismojujuy.model.Article;
import com.andresnogales.turismojujuy.model.Category;

public interface ICategoryRepository  extends CrudRepository<Category, Integer> {

	public List<Category> findAll();
	public Category findById(int id);
	
	
}
