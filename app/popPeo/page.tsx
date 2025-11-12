import Movie from "@/components/movie";
import Person from "@/components/person";
import type { MovieType, PersonType } from "@/types/global";
import { Key } from "lucide-react";

async function fetchPeo(): Promise<PersonType[]> {
    const res = await fetch("https://api.themoviedb.org/3/person/popular", {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_KEY}`,
        },
    });

    const data = await res.json();

    return data.results;
}

export default async function Home() {
    const peoples = await fetchPeo();

    return <div>
        <h2 className="text-lg font-bold pb-2 mb-4 border-b">Top Rated</h2>
        <div className="flex flex-wrap gap-4">
            {peoples.map(people => {
                return (
                   <Person key={people.id} people={people}/>
                );
            })}
        </div>
    </div>;
}

