import MovieType from '../models/MovieModel';
import '../styles/movieListStyle.css';
import '../styles/buttonStyle.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';


type Props = {
    index: number;
    movieList: MovieType[];
}
    

function SmallBtn({ index, movieList } : Props) {
    const navigate = useNavigate();
    const handleDeleteMovieClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieIndex = parseInt(event.currentTarget.id.split('-')[1], 10);
        movieList?.splice(movieIndex, 1);
        navigate('/movielist');
        
    }  
    
    const handleFavoriteMovieClick = (event: React.FormEvent<HTMLButtonElement>) => {
        const movieIndex = parseInt(event.currentTarget.id.split('-')[1], 10);
        const movie = movieList[movieIndex];
        if (movie && movie.is_favorite !== undefined) {
            movie.is_favorite = !movie.is_favorite;
        } else {
            console.error("Movie or is_favorite is undefined");
        }
    };
    return(
    <section className="smallBtnContainer">
        <button onClick={handleDeleteMovieClick} className="smallBtn deleteBtn" id={`delete-${index}`}><FontAwesomeIcon icon={faTrash} /></button>
        <button onClick={handleFavoriteMovieClick} className="smallBtn favoriteBtn" id={`favorite-${index}`}><FontAwesomeIcon icon={faSolidStar} /></button>
    </section>
    )
}

export default SmallBtn 