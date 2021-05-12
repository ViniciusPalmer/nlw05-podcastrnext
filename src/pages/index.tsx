export default function Home(props) {
  console.log(props.episodes);
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
}

// Função nativa do NEXT que permite o uso de:
// SSR = SERVER SITE RENDERING - executa sempre que a pagina é carregado
/*
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
  };
}
*/

// SSG = SERVER SITE GENERETION - executa quando setado | só funciona em prod

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
