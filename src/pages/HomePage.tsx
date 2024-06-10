import LoginPage from "./LoginPage";
import useSessionStore from "../stores/sessionStore";
import MovieListPage from "./MovieListPage";

function HomePage(){

    const userOnline = useSessionStore((state) => state.loggedInUser)

    if(userOnline){
        return (
            <MovieListPage />
            
        )
    } else {
        return (
            <LoginPage />
        )
    }
    
}

export default HomePage