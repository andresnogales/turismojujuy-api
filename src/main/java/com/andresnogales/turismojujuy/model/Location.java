package com.andresnogales.turismojujuy.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "locations")
public class Location{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "name", nullable = false, length = 50)
	private String title;
	
	@Column(name="description", nullable = false)
	private String description;
	
	@Column(name="description_en", nullable = true)
	private String descriptionEn;
	
	@Column(name="latitude", nullable = true)
	private Double latitude;
	
	@Column(name="longitude", nullable = true)
	private Double longitude;
	
	@Column(name="region_id", nullable = false)
	private Integer regionId;
	
	@Column(name = "picture", nullable = true, length = 200)
	private String picture;
	
	@OneToMany(mappedBy="locationId")
    private Set<Article> articles;

	public Location() {}

	public Location(Integer id, String title, String description, String descriptionEn, Double latitude,
			Double longitude, Integer regionId, String picture, Set<Article> articles) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.descriptionEn = descriptionEn;
		this.latitude = latitude;
		this.longitude = longitude;
		this.regionId = regionId;
		this.picture = picture;
		this.articles = articles;
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

	public Integer getRegionId() {
		return regionId;
	}

	public void setRegionId(Integer regionId) {
		this.regionId = regionId;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public Set<Article> getArticles() {
		return articles;
	}

	public void setArticles(Set<Article> articles) {
		this.articles = articles;
	}
	
}
