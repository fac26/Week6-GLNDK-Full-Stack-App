import Image from "next/image";
import { getAllComics } from "database/model";
import Link from "next/link";
import { useState } from "react";
import Styles from "../styles/global.css";

export default function Card({ comicBook }) {
  const {
    title,
    issue,
    image_path,
    genre,
    price,
    publisher_id,
    published_month,
    published_year,
  } = comicBook;

  return (
    <section>
      <div>
        <Link href={`/comics/${id}`}>
          <Image src={image_path} alt={title} width={300} height={300} />
        </Link>
      </div>
      <div>
        <p>{title}</p>
        <p>{issue}</p>
        <p>{publisher_id}</p>
        <p>{(published_month, published_year)}</p>
        <p>{genre}</p>
        <p>{price}</p>
      </div>
    </section>
  );
}
