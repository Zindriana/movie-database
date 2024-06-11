import AddMovie from "../components/AddMovieComponent";
import LogOut from "../components/LogoutComponent";
import MovieList from "../components/MovieList"

function MovieListPage (){
    return (
        <>
            <LogOut />
            <MovieList />
            <AddMovie />
        </>
    )

}

export default MovieListPage