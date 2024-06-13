import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {


  return (
    <section className="container">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/movielist" element= { <MovieListPage/>} />
        <Route path="/:title/:index" element={<MovieDetailsPage />}/>
      </Routes>
    </section>
  )
  
}

export default App
