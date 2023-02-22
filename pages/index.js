import Image from 'next/image';
import Link from 'next/link';
import ComicCard from '../components/comicCard';
import Filter from '../components/filter';
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
  const [publisher, setPublisher] = useState('all');

  return (
    <>
      <header className="company-title">
        <h1>{companyTitle}</h1>
      </header>
      <Filter
        comicsData={comicsData}
        publisher={publisher}
        setPublisher={setPublisher}
      />
      <ComicCard comicsData={comicsData} publisher={publisher} />
      <footer>{companyFooter}</footer>
    </>
  );
}
