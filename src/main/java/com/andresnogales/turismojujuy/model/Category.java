package com.andresnogales.turismojujuy.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "categories")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "title", nullable = false, length = 100)
	private String title;
	
	@Column(name = "title_en", nullable = true, length = 100)
	private String titleEn;
	
	
	public Category() {}

	public Category(Integer id, String title, String titleEn) {
		super();
		this.id = id;
		this.title = title;
		this.titleEn = titleEn;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTitleEn() {
		return titleEn;
	}

	public void setTitleEn(String titleEn) {
		this.titleEn = titleEn;
	}

	
}
