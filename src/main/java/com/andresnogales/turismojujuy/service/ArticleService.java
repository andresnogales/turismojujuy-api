package com.andresnogales.turismojujuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.Article;
import com.andresnogales.turismojujuy.repository.IArticleRepository;

@Service
public class ArticleService {

	@Autowired
	private IArticleRepository articleRepository;

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
}
