import DetailedMovie from "../components/DetailedMovieComponent";
import useSessionStore from "../stores/sessionStore";
import LoginPage from "./LoginPage";

type Props = {
    title : string,
    index: number
  }

function MovieDetailsPage({ title, index } : Props){
    const userOnline = useSessionStore((state) => state.loggedInUser)
    
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