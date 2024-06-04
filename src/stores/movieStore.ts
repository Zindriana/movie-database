import { create } from 'zustand';
import MovieType from "../models/MovieModel";
//import filmerna från axiosanropet

type MovieStore = {
    movieList: MovieType[];
    addMovie: (movie: MovieType) => void;
    deleteMovie: (movie: MovieType) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
    

}));

export default useMovieStore;

