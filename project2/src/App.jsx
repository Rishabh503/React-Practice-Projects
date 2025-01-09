import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/navbar'
import { Hero } from './components/hero'

function App() {
  return(
    <>
   
    <NavBar/>
    <Hero/>
    </>
  )
}

export default App
