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
@Table(name = "categories")
@AllArgsConstructor
@NoArgsConstructor
public class Category {

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
	
	@OneToMany(mappedBy = "categories")
	@Getter @Setter
	private Set<ArticleCategories> articleCategories;
}
