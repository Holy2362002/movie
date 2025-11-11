
import { MovieType, PersonType } from "@/types/global";


async function fetchMovie(id: string): Promise<MovieType> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_KEY}`,
        }
    });

    return await res.json();
}

async function fetchCast(id: string): Promise<PersonType[]> {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_KEY}`,
            },
        }
    );

    const data = await res.json();

    return data.cast;
}


export default async function Movie({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const movie = await fetchMovie(id);
    const cast = await fetchCast(id);
    const profile = "http://image.tmdb.org/t/p/w185";
    const url = "http://image.tmdb.org/t/p/w1280";

    return (
        <div>
            <h2 className="text-lg font-bold pb-2 mb-4 border-b">
                {movie.title} {" "}
                ({movie.release_date.split("-")[0]})
            </h2>
            {movie.backdrop_path ? ( 
                <img src={url + movie.backdrop_path} />
            ) : (
                <div className="w-full aspect-video bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 opacity-70">
                            <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 13.172 3h-2.344a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 7.172 5H4zm3.5 6.5 2.75 3.3 1.75-2.1L16.5 18h-9l2-2.5zM17 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                        </svg>
                        <span className="text-sm">Backdrop not available</span>
                    </div>
                </div>
            )}
            <p className="text-lg py-4">{movie.overview}</p>
            <h2 className="text-lg font-bold pb-2 my-4 border-b">Cast</h2>
            <div className="flex flex-wrap gap-4">
                {cast.map(person => {
                    return (
                        <div key={person.id}>
                            {person.profile_path ? (
                                <img src={profile + person.profile_path} />
                            ) : (
                                <div className="w-[185px] h-[280px] bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-1 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 opacity-70">
                                            <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-9 8a9 9 0 1 1 18 0z"/>
                                        </svg>
                                        <span className="text-xs">Photo not available</span>
                                    </div>
                                </div>
                            )}

                            <div className="text-center mt-2">
                                <h4 className="font-bold">{person.name}</h4>
                                <span className="text-gray-600">
                                    {person.character}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
        
    );
}
