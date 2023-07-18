import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Header from './components/home/header/Header'
import HomePages from "./components/pageContent/HomePages"

 
 const App = () => {
   return (
     <div>
      < Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<HomePages/>} />
        </Routes>
      </Router>
     </div>
   )
 }
 
 export default App