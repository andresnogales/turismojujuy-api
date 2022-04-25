package com.andresnogales.turismojujuy.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "articles")
public class Article {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "title", nullable = false, length = 100)
	private String title;
	
	@Column(name = "title_en", nullable = true, length = 100)
	private String titleEn;
	
	@Column(name="description", nullable = false, columnDefinition = "text")
	private String description;
	
	@Column(name="description_en", nullable = true, columnDefinition = "text")
	private String descriptionEn;
	
	@Column(name = "picture", nullable = true, length = 200)
	private String picture;	
	
	@Column(name = "address", nullable = true, length = 100)
	private String address;
	
	@Column(name="latitude", nullable = true)
	private Double latitude;
	
	@Column(name="longitude", nullable = true)
	private Double longitude;
	
	@Column(name="location_id", nullable = false)
	private Integer locationId;
	
	@ManyToMany
	@JoinTable(
	  name = "article_categories", 
	  joinColumns = @JoinColumn(name = "article_id"), 
	  inverseJoinColumns = @JoinColumn(name = "category_id"))
	@JsonIgnoreProperties({"articles"})
	private Set<Category> articleCategories;

	public Article() {}

	public Article(Integer id, String title, String titleEn, String description, String descriptionEn, String picture,
			String address, Double latitude, Double longitude, Integer locationId, Set<Category> articleCategories) {
		super();
		this.id = id;
		this.title = title;
		this.titleEn = titleEn;
		this.description = description;
		this.descriptionEn = descriptionEn;
		this.picture = picture;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.locationId = locationId;
		this.articleCategories = articleCategories;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescriptionEn() {
		return descriptionEn;
	}

	public void setDescriptionEn(String descriptionEn) {
		this.descriptionEn = descriptionEn;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Integer getLocationId() {
		return locationId;
	}

	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}

	public Set<Category> getArticleCategories() {
		return articleCategories;
	}

	public void setArticleCategories(Set<Category> articleCategories) {
		this.articleCategories = articleCategories;
	}

	
	
	
}
