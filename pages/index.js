import Image from 'next/image';
import Link from 'next/link';
import ComicCard from '../components/ComicCards';
import Filter from '../components/Filter';
import { getAllComics } from 'database/model';
import { useState } from 'react';
import style from '../styles/index.module.css';

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
    <div className={style.background}>
      <header className={style.companyTitle}>
        <h1>{companyTitle}</h1>
      </header>
      <Filter
        comicsData={comicsData}
        publisher={publisher}
        setPublisher={setPublisher}
      />
      <div className={style.gridContainer}>
        <ComicCard comicsData={comicsData} publisher={publisher} />
      </div>
      <footer>{companyFooter}</footer>
    </div>
  );
}
