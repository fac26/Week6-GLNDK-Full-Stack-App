import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './comicBookPage.module.css';
//import button from "..components/...."

export default function ComicBookPage({ comicBookData }) {
  const { title, author, image_path, comic_desc, genre_name, id, PRICE } =
    comicBookData;
  return (
    <section className={styles.container}>
      <div className="image-container">
        <Image src={image_path} alt={title} width={300} height={300} />
      </div>
      <div className="comic-book-info">
        <h1>{title}</h1>
        <h3>{genre_name}</h3>
        <h4>{PRICE}</h4>
        <p>{comic_desc}</p>
      </div>
    </section>
  );
}

//         <Image src={image_path} alt={title} width={300} height={300} />
