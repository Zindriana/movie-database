import useUserStore from "../stores/userStore";
import { useState, useEffect } from 'react';
import axios from 'axios';
import useMovieStore from '../stores/movieStore';

function SignUp(){

    const [keys, setKeys] = useState<string | null> (null);

    const { movie, setMovieList } = useMovieStore(state => ({
        movie : state.movieList,
        setMovieList: state.setMovieList,
      }));

    useEffect(() => {
        axios.get(`http://localhost:8080/api/keys`)
          .then(response => {
            setKeys(response.data.data);
          })
      }, []);
    
      useEffect(() => {
        if(keys){
          axios.get(`http://localhost:8080/api/movies?key=${keys}`)
          .then(response => {
            setMovieList(response.data);
          })
        }
      }, [keys, setMovieList]);
    
    const signUp = useUserStore((state) => state.addUser);
    const movies = movie;

    function handleSignUpSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('newUserName') as string;
        const password = formData.get('newUserPassword') as string;
        const userMovieList = movies;

        const user = { username, password, userMovieList };

        signUp(user);
        console.log(`Användare ${username} skapad`);
    }
    return (
    <section>
        <p>Skapa en ny användare</p>
        <form onSubmit={handleSignUpSubmit} method="post">
            <label htmlFor="newUserName"></label>
            <input type="text" id="newUserName" name="newUserName" placeholder="Användarnamn"></input>
            <label htmlFor="newUserPassword"></label>
            <input type="password" id="newUserPassword" name="newUserPassword" placeholder="Lösenord"></input>
            <button type="submit">Skapa ny användare</button>
        </form> 
    </section>
    )
}

export default SignUp;