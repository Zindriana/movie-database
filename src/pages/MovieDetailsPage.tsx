import { useParams } from "react-router-dom";
import DetailedMovie from "../components/DetailedMovieComponent";

function MovieDetailsPage(){
    const { title } = useParams();
    
    return(
        <DetailedMovie title={title}/>
    )

}

export default MovieDetailsPage