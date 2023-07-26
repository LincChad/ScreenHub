import { useFetch, useTitle } from "../hooks";
import { Card } from "../components/Card";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(title);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>; // Loading message while data is being fetched
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
