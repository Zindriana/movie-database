
import useSessionStore from "../stores/sessionStore";

function MovieList(){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    console.log(movieList?.map((movie) =>
                            movie.trailer_link));

    return (
        <div>
            {(movieList) && movieList.length > 0 ? (
                movieList.map((movie, index) => (
                    <div key={index}>
                        <p>{movie.title}</p>
                    </div>
                ))
            ) : (
                <p>Inga filmer tillgängliga</p>
            )}
        </div>
    );
}

export default MovieList;