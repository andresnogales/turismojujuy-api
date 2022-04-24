package com.andresnogales.turismojujuy.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "regions")
public class Region {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "name", nullable = false, length = 10)
	private String name;
	
	@Column(name="description", nullable = false, columnDefinition = "text")
	private String description;
	
	@Column(name="description_en", nullable = true, columnDefinition = "text")
	private String descriptionEn;
	
	@Column(name = "picture", nullable = true, length = 200)
	private String picture;
	
	@OneToMany(mappedBy="regionId")
    private List<Location> locations;
	
	public Region() {
	}

	public Region(Integer id, String name, String description, String descriptionEn, String picture,
			List<Location> locations) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.descriptionEn = descriptionEn;
		this.picture = picture;
		this.locations = locations;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public List<Location> getLocations() {
		return locations;
	}

	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}

	
	
}
