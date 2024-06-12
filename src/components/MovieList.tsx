
import useSessionStore from "../stores/sessionStore";
import '../styles/movieListStyle.css';
import { useNavigate, useParams } from "react-router-dom";
import SmallBtn from "./SmallBtnComponent";

function MovieList(){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    const navigate = useNavigate();
    const { index } = useParams();

    const handleMovieDetailClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieTitle = event.currentTarget.getAttribute('data-title');
        navigate(`/${movieTitle}`);
    }

    const handleDeleteMovieClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieIndex = parseInt(event.currentTarget.id.split('-')[1], 10);
        movieList?.splice(movieIndex, 1);
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
                        <SmallBtn index={index} movieList={movieList}/>
                    </section>
                ))
            ) : (
                <p>Inga filmer tillgängliga</p>
            )}
        </div>
    );
}

export default MovieList;