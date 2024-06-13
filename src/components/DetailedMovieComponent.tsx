import useSessionStore from "../stores/sessionStore";
import SmallBtn from "./SmallBtnComponent";
import { useNavigate } from 'react-router-dom';

type Props = {
    title : string,
    index: number
  }

function DetailedMovie ({ title, index } : Props){
    const movieIndex = index;
    console.log(movieIndex);
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    const movie = movieList?.find(movie => movie.title === title);
    const movieTitle = title || "Hittade ingen titel";
    const moviePoster = movie?.poster || "Hittade ingen bild";
    const movieTrailer = movie?.trailer_link || "Hittade ingen trailer";
    const navigate = useNavigate();
    const handleGoBackClick = () => {
        navigate(`/movielist`);
    }
    console.log("Index in DetailedMovie:", index);
    console.log("MovieList in DetailedMovie:", movieList);
        return (
            <>
                <button onClick={handleGoBackClick}>Tillbaka</button>
                <article>
                    <h1>{movieTitle}</h1>
                    <img src={moviePoster}/>
                    <iframe src={movieTrailer}></iframe>
                </article>
                <SmallBtn index={index} movieList={movieList}/>
            </>
        );
}

export default DetailedMovie;