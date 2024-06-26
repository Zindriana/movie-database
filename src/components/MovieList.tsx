import useSessionStore from "../stores/sessionStore";
import '../styles/movieListStyle.css';
import '../styles/buttonStyle.css';
import { useNavigate } from "react-router-dom";
import SmallBtn from "./SmallBtnComponent";


function MovieList(){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    const navigate = useNavigate();

    const handleMovieDetailClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieTitle = event.currentTarget.getAttribute('data-title');
        const movieIndex = event.currentTarget.getAttribute('data-index');
        navigate(`/${movieTitle}/${Number(movieIndex)}`);
    }

    return (
        <section>
            {(movieList) && movieList.length > 0 ? (
                movieList.map((movie, index) => (
                    <section className="movieSection" key={index}>
                        <img src={movie.poster}/>
                        <button onClick={handleMovieDetailClick} className="movieBtn" data-title={movie.title} data-index={index}>{movie.title}</button>
                        <SmallBtn index={index} movieList={movieList}/>
                    </section>
                ))
            ) : (
                <p>Inga filmer tillgängliga</p>
            )}
        </section>
    );
}

export default MovieList;