package com.andresnogales.turismojujuy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.andresnogales.turismojujuy.model.Article;
import com.andresnogales.turismojujuy.model.Category;


public interface IArticleRepository extends CrudRepository<Article, Integer>  {

	public Article findById(int id);
	public List<Article> findAll();
	public List<Article> findByArticleCategories(Category category);
}
