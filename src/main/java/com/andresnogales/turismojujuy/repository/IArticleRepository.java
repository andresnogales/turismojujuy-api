package com.andresnogales.turismojujuy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.andresnogales.turismojujuy.model.Article;


public interface IArticleRepository extends CrudRepository<Article, Integer>  {

	public Article findById(int id);
	public List<Article> findAll();
}
