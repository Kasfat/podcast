import React from 'react'

const SignInModal = ({handleOnClose}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
      };

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-[#3B3B3B] rounded-lg p-8 max-w-[567px] mx-auto">
      <div className=" flex flex-col justify-center items-center">
      <p className=' text-2xl font-bold text-white main_title'>Fauget</p>
      <p className=" text-white text-[24px] font-semibold mt-2">Sign In</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <p htmlFor="email" className=" text-white mb-2">Email:</p>
          <input placeholder=" Enter Your Email" className=" w-[447px] h-8 bg-[#0C0C0C] rounded-lg  text-white px-2"/>
        </div>
        <div>
          <p htmlFor="password" className=" text-white mb-2">Password:</p>
          <input className=" w-[447px] h-8 bg-[#0C0C0C] rounded-lg  text-white px-2"/>
        </div>
       
        <button type="submit" className="w-[210px] text-white bg-[#060606] px-6 py-2 rounded-full mt-2">Sign In</button>
        <div>
          <p className="text-white">Don't have account? Create an account <span className=" text-[#0c0c0c] font-semibold underline cursor-pointer">signup</span></p>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignInModal