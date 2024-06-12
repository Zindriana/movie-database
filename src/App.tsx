import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import useUserStore from './stores/userStore';
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {

  const { user, setUserList } = useUserStore(state => ({
    user : state.userList,
    setUserList: state.setUserList,
  }));

  return (
    <section className="container">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/movielist" element= { <MovieListPage/>} />
        <Route path="/:title" element={<MovieDetailsPage/>}/>
      </Routes>
    </section>
  )
  
}

export default App
