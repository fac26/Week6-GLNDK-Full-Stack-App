import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import styles from "../styles/"
//import button from "..components/...."

export default function ComicBookPage({comicBook}) {
const {title, author, image_path, description, genre, id, price}= comicBook
  return (
    <section className="comic-book-display">
      <div className="image-container">
      <Image src={image_path} alt={title} width={300} height={300} />
      </div>
      <div className="comic-book-info">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{genre}</h3>
        <h4>{price}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
}