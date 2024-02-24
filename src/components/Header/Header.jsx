import React from 'react'
import { HiMenu } from "react-icons/hi";

const Header = ({handelSignUp,handleSignIn, showSideBar, handleShowSideBar}) => {

  return (
    <div className='flex justify-between items-center'>
        <div className=' flex items-center justify-center gap-1 md:gap-2'>
        <HiMenu onClick={handleShowSideBar} className=' fill-[#fff] w-8 h-12'/>
        <p className='text-white text-[12px] md:text-[16px] font-semibold lg:text-2xl'>Welcome to fauget music services</p>
        </div>
        <div className='flex gap-2 md:gap-16'>
        <button className='text-white text-[12px] px-2 py-1 rounded-full bg-[#060606] md:px-12 lg:py-2' onClick={handleSignIn}>Sign in</button>
        <button className='text-white text-[12px] px-2 py-1 rounded-full bg-[#3B3B3B] md:px-12 lg:py-2' onClick={handelSignUp}>Sign up</button>
        </div>
    </div>
  )
}

export default Header