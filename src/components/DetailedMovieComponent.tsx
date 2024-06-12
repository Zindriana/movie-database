import useSessionStore from "../stores/sessionStore";
import SmallBtn from "./SmallBtnComponent";
//import useUserStore from "../stores/userStore";

type Props = {
    title : string,
  }

function DetailedMovie ({ title } : Props){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    const movie = movieList?.find(movie => movie.title === title);
    const movieTitle = title;
    const moviePoster = movie?.poster || "Hittade ingen bild";
    const movieTrailer = movie?.trailer_link || "Hittade ingen trailer";
    
        return (
            <>
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