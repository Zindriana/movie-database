
import useSessionStore from "../stores/sessionStore";
import '../styles/movieListStyle.css';

function MovieList(){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;

    return (
        <div>
            {(movieList) && movieList.length > 0 ? (
                movieList.map((movie, index) => (
                    <section className="movieSection" key={index}>
                        <button className="movieBtn">{movie.title}</button>
                        <section className="smallBtnContainer">
                            <button className="smallBtn deleteBtn">Ta bort film</button>
                            <button className="smallBtn favoriteBtn">Lägg till som favorit</button>
                        </section>
                    </section>
                ))
            ) : (
                <p>Inga filmer tillgängliga</p>
            )}
        </div>
    );
}

export default MovieList;