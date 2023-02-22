import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import styles from "../styles/"
//import button from "..components/...."

// export default function ComicBookPage({ comicBookData }) {
//   console.log("hello", comicBookData);
//   return <div>hello</div>;
// }

export default function ComicBookPage({ comicBookData }) {
  const { title, author, image_path, comic_desc, genre, id, PRICE } =
    comicBookData;
  return (
    <section className="comic-book-display">
      <div className="image-container"></div>
      <div className="comic-book-info">
        <h1>{title}</h1>
        <h3>{genre}</h3>
        <h4>{PRICE}</h4>
        <Image src={image_path} alt={title} width={300} height={300} />
        <p>{comic_desc}</p>
      </div>
    </section>
  );
}

//         <Image src={image_path} alt={title} width={300} height={300} />
