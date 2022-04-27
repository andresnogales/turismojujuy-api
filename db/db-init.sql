-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id serial4 NOT NULL,
	create_time information_schema."time_stamp" NULL,
	"name" varchar(100) NOT NULL,
	"password" varchar(200) NOT NULL,
	"role" varchar(20) NOT NULL,
	username varchar(100) NOT NULL,
	email varchar(150) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id),
	CONSTRAINT users_un UNIQUE (username, email)
);

-- public.categories definition

-- Drop table

-- DROP TABLE public.categories;

CREATE TABLE public.categories (
	id serial4 NOT NULL,
	title varchar(100) NOT NULL,
	title_en varchar(100) NULL,
	picture varchar(200) NULL,
	thumbnail varchar(200) NULL,
	featured bool NULL,
	CONSTRAINT categories_pk PRIMARY KEY (id)
);


-- public.regions definition

-- Drop table

-- DROP TABLE public.regions;

CREATE TABLE public.regions (
	id serial4 NOT NULL,
	description text NOT NULL,
	description_en text NULL,
	picture varchar(200) NULL,
	"name" varchar(10) NOT NULL,
	CONSTRAINT regions_pkey PRIMARY KEY (id)
);

-- public.locations definition

-- Drop table

-- DROP TABLE public.locations;

CREATE TABLE public.locations (
	id serial4 NOT NULL,
	"name" varchar(50) NOT NULL,
	description text NULL,
	description_en text NULL,
	latitude float8 NULL,
	longuitude float8 NULL,
	region_id int2 NULL,
	picture varchar(200) NULL,
	longitude float8 NULL,
	CONSTRAINT locations_pk PRIMARY KEY (id)
);


-- public.locations foreign keys

ALTER TABLE public.locations ADD CONSTRAINT locations_region_fk FOREIGN KEY (region_id) REFERENCES public.regions(id);


-- public.articles definition

-- Drop table

-- DROP TABLE public.articles;

CREATE TABLE public.articles (
	id serial4 NOT NULL,
	title varchar(100) NOT NULL,
	title_en varchar(100) NULL,
	description varchar NOT NULL,
	description_en varchar NULL,
	picture varchar(200) NULL,
	address varchar(100) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	featured bool NULL,
	location_id int4 NULL,
	CONSTRAINT articles_pk PRIMARY KEY (id)
);


-- public.articles foreign keys

ALTER TABLE public.articles ADD CONSTRAINT article_location_fk FOREIGN KEY (location_id) REFERENCES public.locations(id);


-- public.events definition

-- Drop table

-- DROP TABLE public.events;

CREATE TABLE public.events (
	id serial4 NOT NULL,
	title varchar(100) NOT NULL,
	title_en varchar(100) NULL,
	description varchar NULL,
	description_en text NULL,
	"begin" date NULL,
	"end" date NULL,
	picture varchar(200) NULL,
	location_id int4 NULL,
	CONSTRAINT events_location_fk FOREIGN KEY (location_id) REFERENCES public.locations(id)
);


-- public.article_categories definition

-- Drop table

-- DROP TABLE public.article_categories;

CREATE TABLE public.article_categories (
	id serial4 NOT NULL,
	article_id int4 NULL,
	category_id int4 NOT NULL,
	CONSTRAINT article_categories_pk PRIMARY KEY (id)
);


-- public.article_categories foreign keys

ALTER TABLE public.article_categories ADD CONSTRAINT article_fk FOREIGN KEY (article_id) REFERENCES public.articles(id) ON DELETE CASCADE;
ALTER TABLE public.article_categories ADD CONSTRAINT categories_fk FOREIGN KEY (category_id) REFERENCES public.categories(id);
