BEGIN;

CREATE TABLE IF NOT EXISTS comics (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  issue INTEGER,
  comic_desc TEXT, 
  image_path VARCHAR,
  price DECIMAL(10,2) NOT NULL,
  publisher_id INTEGER REFERENCES publishers(id) ,
  published_month TEXT,
  published_year INTEGER,
  genre TEXT REFERENCES genre (id)
);

CREATE TABLE IF NOT EXISTS publishers (
  id INTEGER NOT NULL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER NOT NULL PRIMARY KEY,
  name TEXT NOT NULL
);