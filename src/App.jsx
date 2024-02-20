import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

function App() {
  

  return (
    <>
      <SideBar/>
      <div className='ml-[210px] mt-6 px-10'>
      <Header/>
      <Banner/>
      </div>
      
    </>
  )
}

export default App
