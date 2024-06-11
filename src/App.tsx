import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import useUserStore from './stores/userStore';

function App() {

  const { user, setUserList } = useUserStore(state => ({
    user : state.userList,
    setUserList: state.setUserList,
  }));

  return (
    <section className="container">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
      </Routes>
    </section>
  )
  
}

export default App
