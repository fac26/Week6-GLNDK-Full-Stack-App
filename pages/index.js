import Image from "next/image";

const Homepage = () => {
  const companyTitle = "Crazy for Comics!";
  const companyFooter = "For further contact, crazyforcomics@superpowers.pizza";

  return (
    <>
      <header>
        <h1>{companyTitle}</h1>
      </header>
      <main>
        <section>
          <div>
            <h2>Alien</h2>
            <p>Ridley Scott</p>
            <Image
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
