import DetailedMovie from "../components/DetailedMovieComponent";
import LogoHeader from "../components/LogoComponent";
import useSessionStore from "../stores/sessionStore";
import LoginPage from "./LoginPage";
import { useParams } from "react-router-dom";
import "../styles/homePageStyle.css";
import "../index.css";

  
function MovieDetailsPage(){
    const userOnline = useSessionStore((state) => state.loggedInUser)
    const { title, index } = useParams();
    
    if(userOnline){
        return (
            <section className="bodyContainer">
            <header>
                <LogoHeader />
                <DetailedMovie title={title} index={index}/> 
            </header>
            </section>
            
        )
    } else {
        return (
            <LoginPage />
        )
    }
}

export default MovieDetailsPage