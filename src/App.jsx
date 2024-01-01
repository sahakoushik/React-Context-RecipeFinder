import Header from './components/Header'
import FoodList from './components/FoodList'
import Details from './components/Details'
import Favorites from './components/Favorites'
import './App.css'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
function App() {
  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<FoodList/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
      {/* <FoodList/> */}
    </div>
  )
}

export default App
