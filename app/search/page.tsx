import Movie from "@/components/movie";
import type { MovieType } from "@/types/global";

async function fetchSearch(q : string): Promise<MovieType[]> {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${q}`, {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_KEY}`,
        },
    });

    const data = await res.json();

    return data.results;
}

export default async function Search({
    searchParams,
}: {
    searchParams: Promise<{ q: string }>;
}) {
    const q = (await searchParams).q;
    const movies = await fetchSearch(q);

    return (
        <div>
            <h2 className="text-lg font-bold pb-2 mb-4 border-b">Search : {q}</h2>
            {movies && movies.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                    {movies.map(movie => {
                        return (
                            <Movie key={movie.id} movie={movie} />
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-600">
                    <p className="text-lg">No movies found for &quot;{q}&quot;</p>
                    <p className="text-sm mt-2">Try searching with different keywords.</p>
                </div>
            )}
        </div>
    );
}

