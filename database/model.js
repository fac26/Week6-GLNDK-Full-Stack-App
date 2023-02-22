import db from "./db.js";

//Gets all comics from the database
const get_all_Comics = db.prepare(
  /*sql*/
  `SELECT
  id,
  title,
  issue,
  image_path,
  FORMAT ('£%.2f', price) AS PRICE,
  publisher_id,
  published_month,
  published_year,
  genre
FROM
comics`
);

export function getAllComics() {
  return get_all_Comics.all();
}

console.log(getAllComics());

//Gets one single commic by ID
const get_comic_by_ID = db.prepare(/*sql*/ `SELECT 
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
  FROM comics WHERE id = ?`);

export function getComicByID(id) {
  return get_comic_by_ID.get(id);
}
