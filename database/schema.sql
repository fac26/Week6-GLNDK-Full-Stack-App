PRAGMA foreign_keys = ON; 
BEGIN;


CREATE TABLE IF NOT EXISTS publishers (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS comics (
  id INTEGER PRIMARY KEY,
  title TEXT,
  issue INTEGER,
  comic_desc TEXT, 
  image_path VARCHAR,
  price DECIMAL(10,2),
  publisher_id INTEGER REFERENCES publishers(id),
  published_month TEXT,
  published_year INTEGER,
  genre TEXT REFERENCES genre (id)
);


COMMIT;