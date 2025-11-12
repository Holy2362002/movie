import { PersonType } from "@/types/global";
import Link from "next/link";
import { Image } from "lucide-react";

export default function Person({ people }: { people: PersonType }) {
    const url = "http://image.tmdb.org/t/p/w185";

    return (
        <div className="w-[185px] group">
            
            <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg">
                {people.profile_path ? (
                    <Link href={`/person/${people.id}`} className="block">
                        <img
                            src={url + people.profile_path}
                            alt={people.name}
                            className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                ) : (
                    <Link href={`/person/${people.id}`} className="block">
                        <div className="w-full h-[280px] bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 flex flex-col items-center justify-center gap-3 transition-colors group-hover:from-gray-200 group-hover:to-gray-300">
                            <Image className="w-14 h-14 text-gray-400" />
                            <p className="text-xs text-center px-3 text-gray-500 font-medium">
                                No photo available
                            </p>
                        </div>
                    </Link>
                )}
            </div>

           
            <div className="mt-3 space-y-2">
                <Link href={`/person/${people.id}`}>
                    <h3 className="font-bold text-base text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                        {people.name}
                    </h3>
                </Link>
                
                
                {people.original_name ? (
                    <div className="mt-2 p-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg shadow-sm">
                        <p className="text-xs text-gray-700 leading-relaxed line-clamp-4">
                            {people.original_name}
                        </p>
                    </div>
                ) : (
                    <p className="text-xs text-gray-400 italic">Not Avaliable</p>
                )}
            </div>
        </div>
    );
}
