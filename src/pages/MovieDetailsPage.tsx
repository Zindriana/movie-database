import { useParams } from "react-router-dom";

function MovieDetailsPage(){
    const { title } = useParams();
    
    return(
        <p>{ title }</p>
    )

}

export default MovieDetailsPage