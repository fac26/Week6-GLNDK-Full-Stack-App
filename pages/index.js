import Image from "next/image";

const Homepage = () => {
  const companyTitle = "Crazy for Comics!";
  const companyFooter = "For further contact, crazyforcomics@superpowers.pizza";

  return (
    <>
      <header className="company-title">
        <h1>{companyTitle}</h1>
      </header>
      <main>
        <section className="grid-container">
          <div className="card-wrapper">
            <h2 className="card-title">Alien</h2>
            <p className="card-author">Ridley Scott</p>
            <Image
              className="card-image"
              src="/../public/images/01.jpg"
              alt="Picture of the author"
              height={150}
              width={150}
            />
          </div>
          <div className="card-wrapper">
            <h2 className="card-title">Alien</h2>
            <p className="card-author">Ridley Scott</p>
            <Image
              className="card-image"
              src="/../public/images/01.jpg"
              alt="Picture of the author"
              height={150}
              width={150}
            />
          </div>
          <div className="card-wrapper">
            <h2 className="card-title">Alien</h2>
            <p className="card-author">Ridley Scott</p>
            <Image
              className="card-image"
              src="/../public/images/01.jpg"
              alt="Picture of the author"
              height={150}
              width={150}
            />
          </div>
          <div className="card-wrapper">
            <h2 className="card-title">Alien</h2>
            <p className="card-author">Ridley Scott</p>
            <Image
              className="card-image"
              src="/../public/images/01.jpg"
              alt="Picture of the author"
              height={150}
              width={150}
            />
          </div>
        </section>
      </main>

      <footer>{companyFooter}</footer>
    </>
  );
};

export default Homepage;
