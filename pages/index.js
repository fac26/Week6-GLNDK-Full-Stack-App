import Image from 'next/image';
import Link from 'next/link';
import ComicCard from '../components/comicCard';
import Filter from '../components/filter';
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
<<<<<<< HEAD
      <div className='comic-grid'>
        <ComicCard comicsData={comicsData} /></div>
=======
      <Filter
        comicsData={comicsData}
        publisher={publisher}
        setPublisher={setPublisher}
      />
      <div className={style.gridContainer}>
        <ComicCard comicsData={comicsData} publisher={publisher} />
      </div>
>>>>>>> 71791b36ccaf5d5af32d516ae306643d931d9f88
      <footer>{companyFooter}</footer>
    </div>
  );
}
