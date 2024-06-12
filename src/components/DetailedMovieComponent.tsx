import useSessionStore from "../stores/sessionStore";
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
                <button></button>
                <article>
                    <p>{movieTitle}</p>
                    <p>{moviePoster}</p>
                    <p>{movieTrailer}</p>
                </article>
            </>
        );
}

export default DetailedMovie;