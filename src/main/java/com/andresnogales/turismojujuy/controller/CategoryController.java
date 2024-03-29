package com.andresnogales.turismojujuy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.andresnogales.turismojujuy.service.CategoryService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("api/categories")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public ResponseEntity<?> getCategories(){
		return new ResponseEntity<>(categoryService.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getCategory(@PathVariable("id") Integer id){
		return new ResponseEntity<>(categoryService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping("/{id}/articles")
	public ResponseEntity<?> getCategoryWithArticles(@PathVariable("id") Integer id){
		return new ResponseEntity<>(categoryService.findByIdWithArticles(id),HttpStatus.OK);
	}

}
