
import useSessionStore from "../stores/sessionStore";
import '../styles/movieListStyle.css';
import { useNavigate } from "react-router-dom";

function MovieList(){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    const navigate = useNavigate();

    const handleMovieDetailClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieTitle = event.currentTarget.getAttribute('data-title');
        navigate(`/${movieTitle}`);
    }

    const handleDeleteMovieClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieIndex = parseInt(event.currentTarget.id.split('-')[1], 10);
        movieList.splice(movieIndex, 1);
        navigate('/movielist');
        
    }  
    
    const handleFavoriteMovieClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieIndex = parseInt(event.currentTarget.id.split('-')[1], 10);
        const movie = movieList[movieIndex];
        if(movie.is_favorite){
            movie.is_favorite = false;
        } else {
            movie.is_favorite = true;
        }
    };

    return (
        <div>
            {(movieList) && movieList.length > 0 ? (
                movieList.map((movie, index) => (
                    <section className="movieSection" key={index}>
                        <button onClick={handleMovieDetailClick} className="movieBtn" data-title={movie.title}>{movie.title}</button>
                        <section className="smallBtnContainer">
                            <button onClick={handleDeleteMovieClick} className="smallBtn deleteBtn" id={`delete-${index}`}>Ta bort film</button>
                            <button onClick={handleFavoriteMovieClick} className="smallBtn favoriteBtn" id={`favorite-${index}`}>Lägg till som favorit</button>
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