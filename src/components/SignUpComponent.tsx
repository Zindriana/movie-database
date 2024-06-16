import useUserStore from "../stores/userStore";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useMovieStore from '../stores/movieStore';
import "../styles/formStyle.css";

function SignUp(){

    const [keys, setKeys] = useState<string | null> (null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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
        setMessage('Användare ' + username + ' skapad!');
    }

    return (
      <section className="formContainer">
          <h2 className="heading">Skapa en ny användare</h2>
          <form className="formContainer" onSubmit={handleSignUpSubmit} method="post">
              <label htmlFor="newUserName"></label>
              <input type="text" id="newUserName" name="newUserName" placeholder="Användarnamn"></input>
              <label htmlFor="newUserPassword"></label>
              <input type="password" id="newUserPassword" name="newUserPassword" placeholder="Lösenord"></input>
              <button type="submit">Skapa ny användare</button>
          </form>
          {message && <p className="message">{message}</p>} 
      </section>
    )
}

export default SignUp;