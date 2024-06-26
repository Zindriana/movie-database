import AddMovie from "../components/AddMovieComponent";
import LogoHeader from "../components/LogoComponent";
import LogOut from "../components/LogoutComponent";
import MovieList from "../components/MovieList";
import "../styles/homePageStyle.css";
import "../index.css";

function MovieListPage (){
    return (
        <section className="bodyContainer">
            <LogoHeader />
            <div className="leftAdjust">
                <LogOut />
            </div>
            <AddMovie />
            <MovieList />
        </section>
    )

}

export default MovieListPage