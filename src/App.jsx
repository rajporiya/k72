import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        {/* <Link to='/'>Home</Link>
        <Link to='/agence'>Agence</Link>
        <Link to='/projects'>Projects</Link> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/agence' element={<Agence />}/>
          <Route path='projects' element={<Projects />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
