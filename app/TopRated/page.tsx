import Movie from "@/components/movie";
import type { MovieType } from "@/types/global";
import { Key } from "lucide-react";

async function fetchTop(): Promise<MovieType[]> {
    const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_KEY}`,
        },
    });

    const data = await res.json();

    return data.results;
}

export default async function Home() {
    const topRated = await fetchTop();

    return <div>
        <h2 className="text-lg font-bold pb-2 mb-4 border-b">Top Rated</h2>
        <div className="flex flex-wrap gap-4">
            {topRated.map(movie => {
                return (
                    <Movie key={movie.id} movie={movie}/>
                );
            })}
        </div>
        <div>
            
        </div>
    </div>;
}

