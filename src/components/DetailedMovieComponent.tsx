import useSessionStore from "../stores/sessionStore";
import SmallBtn from "./SmallBtnComponent";
import "../styles/movieListStyle.css";
import { useNavigate, useParams } from 'react-router-dom';

type Props = {
    title : string,
    index: number
  }

function DetailedMovie ({ title } : Props){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    const movie = movieList?.find(movie => movie.title === title);
    const movieTitle = title || "Hittade ingen titel";
    const moviePoster = movie?.poster || "Hittade ingen bild";
    const movieTrailer = movie?.trailer_link || "Hittade ingen trailer";
    const navigate = useNavigate();
    const { index } = useParams();
    const handleGoBackClick = () => {
        navigate(`/movielist`);
    }
    
        return (
            <section className="movieSection">
                //<button className="leftAdjust" onClick={handleGoBackClick}>Tillbaka</button>
                <article>
                    <h1 className="heading">{movieTitle}</h1>
                    <img src={moviePoster}/>
                    <iframe src={movieTrailer}></iframe>
                    <SmallBtn index={parseInt(index)} movieList={movieList}/>
                </article>
            </section>
        );
}

export default DetailedMovie;