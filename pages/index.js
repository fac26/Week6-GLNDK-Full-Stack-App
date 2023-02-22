import Image from 'next/image';
import Link from 'next/link';
import ComicCard from '../components/comicCard';
import { getAllComics } from 'database/model';
import { useState } from 'react';


export async function getServerSideProps() {
  let comicsData = getAllComics();
  return {
    props: {
      comicsData,
    },
  };
}

export default function Homepage({ comicsData }) {
  const companyTitle = 'Crazy for Comics!';
  const companyFooter = 'For further contact, crazyforcomics@superpowers.pizza';
  return (
    <>
      <header className="company-title">
        <h1>{companyTitle}</h1>
      </header>
      <div className='comic-grid'>
        <ComicCard comicsData={comicsData} /></div>
      <footer>{companyFooter}</footer>
    </>
  );
}
