import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/students" element={<Students />} />
      <Route path="/about" element={<About />} />
    </Routes>
      
    </>
  )
}

export default App
