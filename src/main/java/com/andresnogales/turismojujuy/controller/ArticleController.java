package com.andresnogales.turismojujuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.andresnogales.turismojujuy.service.ArticleService;

@RestController
@RequestMapping("api/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getArticle(@PathVariable("id") Integer id){
		return new ResponseEntity<>(articleService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<?> getArticles(){
		return new ResponseEntity<>(articleService.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/category/{id}")
	public ResponseEntity<?> getArticlesByCategory(@PathVariable("id") Integer id){
		return new ResponseEntity<>(articleService.findByCategory(id),HttpStatus.OK);
	}
}
