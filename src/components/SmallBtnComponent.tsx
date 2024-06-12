import MovieType from '../models/MovieModel';
import '../styles/movieListStyle.css';
import { useNavigate } from "react-router-dom";


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
        if(movie.is_favorite){
            movie.is_favorite = false;
        } else {
            movie.is_favorite = true;
        }
    };
    return(
    <section className="smallBtnContainer">
        <button onClick={handleDeleteMovieClick} className="smallBtn deleteBtn" id={`delete-${index}`}>Ta bort film</button>
        <button onClick={handleFavoriteMovieClick} className="smallBtn favoriteBtn" id={`favorite-${index}`}>Lägg till som favorit</button>
    </section>
    )
}

export default SmallBtn 