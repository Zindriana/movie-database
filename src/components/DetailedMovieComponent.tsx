import useSessionStore from "../stores/sessionStore";
import useUserStore from "../stores/userStore";

type Props = {
    title : string,
    
  }

function DetailedMovie (){
    const loggedUser = useSessionStore((state) => state.loggedInUser);
    const movieList = loggedUser?.userMovieList.data;
    
    const DetailedMovie = ({ title }) => {
        const x = title;
        return (
            <p>{x}</p>
        );
    };

}

export default DetailedMovie;