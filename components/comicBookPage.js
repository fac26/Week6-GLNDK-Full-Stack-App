import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/comicBookPage.module.css';

export default function ComicBookPage({ comicBookData }) {
  const { title, issue, image_path, comic_desc, genre_name, PRICE } =
    comicBookData;
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image_path}
          alt={title}
          width={300}
          height={400}
        />
      </div>
      <div className={styles.comicInfo}>
        <h1>
          {title} {`#${issue}`}
        </h1>

        <h3>{genre_name}</h3>
        <h4>{PRICE}</h4>
        <p>{comic_desc}</p>
      </div>
    </section>
  );
}
