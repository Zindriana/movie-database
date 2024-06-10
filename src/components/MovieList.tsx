
import useSessionStore from "../stores/sessionStore";

function MovieList(){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList;
    console.log(loggedUser);
    console.log(movieList);
    console.log(movieList?.);

    return (
        <div>
            {Array.isArray(movieList) && movieList.length > 0 ? (
                movieList.map((movie, index) => (
                    <div key={index}>
                        <p>{movie.title}</p>
                        <p>{movie.trailer}</p>
                    </div>
                ))
            ) : (
                <p>Inga filmer tillgängliga</p>
            )}
        </div>
    );
}

export default MovieList;