import db from "./db.js";

const get_all_Comics = db.prepare(
  /*sql*/
  `SELECT
  id,
  title,
  issue,
  comic_desc, 
  image_path,
  FORMAT ('£%.2f', price) AS PRICE,
  publisher_id,
  published_month,
  published_year,
  genre
FROM
comics`
);

export function getComics() {
  return get_all_Comics.all();
}

const get_comic_by_ID = db.prepare(/*sql*/ `SELECT * from comics WHERE id = ?`);

export function getComicsByID(id) {
  return get_comic_by_ID.get(id);
}
