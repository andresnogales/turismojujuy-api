package com.andresnogales.turismojujuy.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "articles")
@AllArgsConstructor
@NoArgsConstructor
public class Article {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter
	private Integer id;
	
	@Column(name = "title", nullable = false, length = 100)
	@Getter @Setter
	private String title;
	
	@Column(name = "title_en", nullable = true, length = 100)
	@Getter @Setter
	private String titleEn;
	
	@Column(name="description", nullable = false)
	@Getter @Setter
	private String description;
	
	@Column(name="description_en", nullable = true)
	@Getter @Setter
	private String descriptionEn;
	
	@Column(name = "picture", nullable = true, length = 200)
	@Getter @Setter
	private String picture;	
	
	@Column(name = "title_en", nullable = true, length = 100)
	@Getter @Setter
	private String location;
	
	@Column(name="latitude", nullable = true)
	@Getter @Setter
	private Double latitude;
	
	@Column(name="longitude", nullable = true)
	@Getter @Setter
	private Double longitude;
	
	@OneToMany(mappedBy = "articles")
	@Getter @Setter
    private Set<ArticleCategories> articleCategories;
}
