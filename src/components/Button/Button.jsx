import React from 'react'

const Button = ({children, ...rest}) => {
  return (
    <div {...rest} className='text-white text-center text-[12px] px-2 py-1 rounded-full bg-[#060606] md:px-12 lg:py-2'>
        <p>{children}</p>
    </div>
  )
}

export default Button