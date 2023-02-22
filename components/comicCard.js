import Image from 'next/image';
import Link from 'next/link';
//import { useState } from 'react';
import style from '../styles/comicCard.module.css';

export default function ComicCard({ comicsData }) {
  //   const {
  //     id,
  //     title,
  //     issue,
  //     image_path,
  //     price,
  //     publisher_id,
  //     published_month,
  //     published_year,
  //     genre,
  //   } = comicsData[0];

  return (
    <>
      {comicsData.map((comic) => (
        <div className={style.comicContainer} key={comic.id}>
          <Link href={`/comics/${comic.id}`}>
            <Image src={comic.image_path} width={300} height={425} />
          </Link>

          <p className={style.title}>
            {comic.title} {`#${comic.issue}`}
          </p>

          <p className="publisher">{comic.publisher_name}</p>
          <p className="published">
            {`${comic.published_month} ${comic.published_year}`}
          </p>
          <p className="genre">{comic.genre_name}</p>

          <p className={style.price}>{comic.PRICE}</p>
          <button className={style.button}>Add to Cart</button>

        </div>
      ))}
    </>
  );
}
