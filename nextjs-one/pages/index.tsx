import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '../components/Seo';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  overview: string;
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/moives`)
  ).json();
  return { props: { results } };
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: Movie) => (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
