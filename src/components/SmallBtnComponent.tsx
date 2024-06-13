import MovieType from '../models/MovieModel';
import '../styles/movieListStyle.css';
import '../styles/buttonStyle.css';
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
        console.log("Button ID:", event.currentTarget.id);
        const movieIndex = parseInt(event.currentTarget.id.split('-')[1], 10);
        console.log("Clicked movie index:", movieIndex);
        const movie = movieList[movieIndex];
        console.log("Selected movie:", movie);
        if (movie && movie.is_favorite !== undefined) {
            movie.is_favorite = !movie.is_favorite;
        } else {
            console.error("Movie or is_favorite is undefined");
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