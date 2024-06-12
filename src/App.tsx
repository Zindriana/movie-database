import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import useUserStore from './stores/userStore';
import MovieListPage from "./pages/MovieListPage";

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
      </Routes>
    </section>
  )
  
}

export default App
