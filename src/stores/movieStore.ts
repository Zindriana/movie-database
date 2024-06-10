import { create } from 'zustand';
import MovieType from "../models/MovieModel";

type MovieStore = {
    movieList: MovieType[];
    setMovieList: (movie: MovieType[]) => void;
    addMovie: (movie: MovieType) => void;
    deleteMovie: (title: string) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
    movieList : [],
    setMovieList : (movieList) => set({movieList}),
    addMovie: (movie) => set((state) => ({movieList:[...state.movieList, movie]})),
    deleteMovie: (title) => set((state) => ({movieList:state.movieList.filter((movie) => movie.title !== title)}))

}));

export default useMovieStore;

