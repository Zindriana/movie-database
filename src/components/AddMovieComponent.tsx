import useSessionStore from "../stores/sessionStore";
import { useNavigate } from 'react-router-dom';
import "../styles/formStyle.css";

function AddMovie(){

    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    const navigate = useNavigate();

    function handleAddMovieSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const movieTitle = formData.get('newMovieTitle') as string;
        const moviePoster = formData.get('newMoviePoster') as string;
        const movieTrailer = formData.get('newMovieTrailer') as string;
        const movie = { title : movieTitle, poster : moviePoster, trailer_link : movieTrailer };

        movieList?.push(movie);
        navigate(`/movielist`);

    }

    return(
        <section className="formContainer">
            <h2 className="heading">Lägg till film</h2>
            <form className="formContainer" onSubmit={handleAddMovieSubmit} method="post">
                <label htmlFor="newMovieTitle"></label>
                <input type="text" id="newMovieTitle" name="newMovieTitle" placeholder="Filmnamn"></input>
                <label htmlFor="newMoviePoster"></label>
                <input type="text" id="newMoviePoster" name="newMoviePoster" placeholder="Poster-adress"></input>
                <label htmlFor="newMovieTrailer"></label>
                <input type="text" id="newMovieTrailer" name="newMovieTrailer" placeholder="Trailer-länk"></input>
                <button type="submit">Spara filmen</button>
            </form> 
    </section>
    )
}

export default AddMovie;