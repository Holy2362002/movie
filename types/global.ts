export type GenreType = {
    id: string;
    name: string;
};

export type MovieType = {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    first_air_date: string;
    name : string;
    vote_average?: number;
    vote_count?: number;
};

export type PersonType = {
    id: number,
    name: string;
    character: string;
    profile_path: string;
    overview : string;
    original_name : string;
}