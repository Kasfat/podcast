import React from 'react'

const Header = ({handelSignUp}) => {

  

  return (
    <div className='flex justify-between'>
        <p className='text-white text-2xl font-semibold'>Welcome to fauget music services</p>
        <div className='flex gap-16'>
        <button className='text-white rounded-full bg-[#060606] px-12 py-2 '>Sign in</button>
        <button className='text-white rounded-full bg-[#3B3B3B] px-12 py-2' onClick={handelSignUp}>Sign up</button>
        </div>
    </div>
  )
}

export default Header