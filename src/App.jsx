import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import SubMenu from './components/SubMenu/SubMenu'
import MainBody from './components/MainBody/MainBody'



function App() {
  

  return (
    <>
      <SideBar/>
      <div className='ml-[210px] mt-6 px-10'>
      <Header/>
      <Banner/>
      <SubMenu/>
      <MainBody/>
      </div>
      
    </>
  )
}

export default App
