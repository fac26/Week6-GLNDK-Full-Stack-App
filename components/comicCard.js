import Image from 'next/image';
import Link from 'next/link';
//import { useState } from 'react';
//import styles from '../styles/global';

export default function ComicCard({ comicsData, publisher }) {
  console.log('data', comicsData);
  console.log('filter has appeared in comic card componet:', publisher.filter);
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

  if (publisher.filter === undefined) {
    return (
      <>
        {comicsData.map((comic) => (
          <div className="comic-container" key={comic.id}>
            <Link href={`/comics/${comic.id}`}>
              <Image src={comic.image_path} width={300} height={500} />
            </Link>
            <p className="title">{comic.title}</p>
            <p className="issue">{`#${comic.issue}`}</p>
            <p className="publisher">{comic.publisher_name}</p>
            <p className="published">
              {`${comic.published_month} ${comic.published_year}`}
            </p>
            <p className="genre">{comic.genre_name}</p>
            <p className="price">{comic.price}</p>
            <button className="buyBtn">Add to Cart</button>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {comicsData
        .filter(
          (comic) =>
            comic.publisher_name === publisher.filter ||
            publisher.filter === 'all'
        )
        .map((comic) => (
          <div className="comic-container" key={comic.id}>
            <Link href={`/comics/${comic.id}`}>
              <Image src={comic.image_path} width={300} height={500} />
            </Link>
            <p className="title">{comic.title}</p>
            <p className="issue">{`#${comic.issue}`}</p>
            <p className="publisher">{comic.publisher_name}</p>
            <p className="published">
              {`${comic.published_month} ${comic.published_year}`}
            </p>
            <p className="genre">{comic.genre_name}</p>
            <p className="price">{comic.price}</p>
            <button className="buyBtn">Add to Cart</button>
          </div>
        ))}
    </>
  );
}
