import ComicBookPage from 'components/comicBookPage';
import BackToHome from 'components/backToHome';
import { getAllComics, getComicByID } from 'database/model';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const comicBookData = await getComicByID(params.id);
  return {
    props: {
      comicBookData,
    },
  };
}

export async function getStaticPaths() {
  let allComicBooks = getAllComics();
  const allComicIds = allComicBooks.map((comic) => {
    return {
      params: {
        id: JSON.stringify(comic.id),
      },
    };
  });

  return {
    paths: allComicIds,
    fallback: false,
  };
}

export default function postComicBook({ comicBookData }) {
  return (
    <>
      <Head>
        <title>{comicBookData.title}</title>
      </Head>
      <header>
        <h1>{comicBookData.title}</h1>
      </header>
      <BackToHome />
    </>
  );
}
