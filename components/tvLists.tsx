import { MovieType } from "@/types/global";
import Link from "next/link";
import { Image } from "lucide-react";

export default function TvLists({ movie }: { movie: MovieType }) {
    const url = "http://image.tmdb.org/t/p/w185";

    return (
        <div className="w-[185px] hover:scale-105 transition-transform">
            {movie.poster_path ? (
                <Link href={`/movie/${movie.id}`}>
                <img src={url + movie.poster_path} />
                </Link>
            ) : (
                <Link href={`/movie/${movie.id}`}>
                    <div className="w-[185px] h-[280px] bg-gray-100 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-200 transition-colors">
                        <Image className="w-12 h-12" />
                        <p className="text-xs text-center px-2">No poster available</p>
                    </div>
                </Link>
            )}
            <div className="text-center">
                <h3 className="font-bold">{movie.title}</h3>
                <span className="text-gray-600">
                    {movie.release_date.split("-")[0]}
                </span>
            </div>
        </div>
    );
}
