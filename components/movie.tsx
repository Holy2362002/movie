import { MovieType } from "@/types/global";
import Link from "next/link";
import { Image, Star } from "lucide-react";

export default function Movie({ movie }: { movie: MovieType }) {
    const url = "http://image.tmdb.org/t/p/w185";
    const rating =
        typeof movie.vote_average === "number"
            ? movie.vote_average.toFixed(1)
            : null;

    return (
        <div className="w-[185px] hover:scale-105 transition-transform">
            {movie.poster_path ? (
                <Link
                    href={`/movie/${movie.id}`}
                    className="relative block group"
                >
                    {rating && (
                        <span className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/80 px-2 py-1 text-xs font-semibold text-white shadow-md transition-transform group-hover:scale-105">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            {rating}
                        </span>
                    )}
                    <img
                        src={url + movie.poster_path}
                        className="w-full h-[280px] object-cover rounded-lg"
                       
                    />
                </Link>
            ) : (
                <Link
                    href={`/movie/${movie.id}`}
                    className="relative block group"
                >
                    {rating && (
                        <span className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/80 px-2 py-1 text-xs font-semibold text-white shadow-md transition-transform group-hover:scale-105">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            {rating}
                        </span>
                    )}
                    <div className="w-[185px] h-[280px] bg-gray-100 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-200 transition-colors">
                        <Image className="w-12 h-12" />
                        <p className="text-xs text-center px-2">No poster available</p>
                    </div>
                </Link>
            )}
            <div className="text-center">
                <h3 className="font-bold line-clamp-2">{movie.title}</h3>
                <span className="text-gray-600 text-sm">
                    {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
                </span>
            </div>
        </div>
    );
}
