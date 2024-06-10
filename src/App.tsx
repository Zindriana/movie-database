//import { useState, useEffect } from 'react'
import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
//import axios from 'axios';
import useUserStore from './stores/userStore';
//import useMovieStore from './stores/movieStore';
//import useSessionStore from './stores/sessionStore';

function App() {

  //const [keys, setKeys] = useState<string | null> (null);

  const { user, setUserList } = useUserStore(state => ({
    user : state.userList,
    setUserList: state.setUserList,
  }));

  /*const { movie, setMovieList } = useMovieStore(state => ({
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
        console.log(response.data)
        setMovieList(response.data);
      })
    }
  }, [keys, setMovieList]);*/

  return (
    <section className="container">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
      </Routes>
    </section>
  )
  
}

export default App
