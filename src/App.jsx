import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './componentes/Home'
import Info from './componentes/Info'
import Music from './componentes/Music'
import Photos from './componentes/Photos'
import ErrorPage from './componentes/ErrorPage'



function App() {
   const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/music' element={<Music />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </Router>
    </>
  )


}

export default App
