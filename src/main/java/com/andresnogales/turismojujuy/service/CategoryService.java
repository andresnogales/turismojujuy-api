package com.andresnogales.turismojujuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andresnogales.turismojujuy.model.Article;
import com.andresnogales.turismojujuy.model.Category;
import com.andresnogales.turismojujuy.repository.ICategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private ICategoryRepository categoryRepository;
	
	public List<Category> findAll() {
		return categoryRepository.findAll();
	}
	
	public Category findById(int id) {
		return categoryRepository.findById(id);
	}

}
