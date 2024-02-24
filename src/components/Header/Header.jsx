import React from 'react'
import { HiMenu } from "react-icons/hi";
import Button from '../Button/Button';

const Header = ({handelSignUp,handleSignIn, showSideBar, handleShowSideBar}) => {

  return (
    <div className='flex justify-between items-center'>
        <div className=' flex items-center justify-center gap-1 md:gap-2'>
        <HiMenu onClick={handleShowSideBar} className=' fill-[#fff] w-8 h-12'/>
        <p className='text-white text-[12px] md:text-[16px] font-semibold lg:text-2xl'>Welcome to fauget music services</p>
        </div>
        <div className='flex gap-2 md:gap-16'>
        <Button  onClick={handleSignIn}>Sign in</Button>
        <Button  onClick={handelSignUp}>Sign up</Button>
        </div>
    </div>
  )
}

export default Header