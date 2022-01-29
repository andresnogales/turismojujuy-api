package com.andresnogales.turismojujuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.Article;
import com.andresnogales.turismojujuy.model.Category;
import com.andresnogales.turismojujuy.repository.IArticleRepository;
import com.andresnogales.turismojujuy.repository.ICategoryRepository;

@Service
public class ArticleService {

	@Autowired
	private IArticleRepository articleRepository;
	
	@Autowired
	private ICategoryRepository categoryRepository;

	public Article findById(int id){
		Article article = articleRepository.findById(id);
		if (article == null) {
			throw new RuntimeException("Article not found");
		}
		return article;
	}
	
	public List<Article> findAll(){
		return articleRepository.findAll();
	}
	
	public List<Article> findByCategory(int id){
		Category category = categoryRepository.findById(id);
		if (category == null) {
			throw new RuntimeException("Category not found");
		}
		return articleRepository.findByArticleCategories(category);
	}
}
