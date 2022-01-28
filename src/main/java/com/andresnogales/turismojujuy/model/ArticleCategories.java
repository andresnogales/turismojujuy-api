package com.andresnogales.turismojujuy.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "articles_categories")
@AllArgsConstructor
@NoArgsConstructor
public class ArticleCategories {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter
	private Integer id;

    @ManyToOne
    @JoinColumn(name = "article_id")
    @Getter @Setter
    private Article article;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @Getter @Setter
    private Category category;
}
