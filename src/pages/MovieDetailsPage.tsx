import DetailedMovie from "../components/DetailedMovieComponent";
import useSessionStore from "../stores/sessionStore";
import LoginPage from "./LoginPage";
import { useParams } from "react-router-dom";

  
function MovieDetailsPage(){
    const userOnline = useSessionStore((state) => state.loggedInUser)
    const { title, index } = useParams();
    
    if(userOnline){
        return (
            <DetailedMovie title={title} index={index}/> 
        )
    } else {
        return (
            <LoginPage />
        )
    }
}

export default MovieDetailsPage