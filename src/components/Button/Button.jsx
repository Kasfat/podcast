import React from 'react'

const Button = ({color,children, ...rest}) => {
  let bgButtonColor = '';
  switch (color) {
    case 'dark':
      bgButtonColor = 'bg-[#060606]';
      break;
    case 'light':
      bgButtonColor = 'bg-[#3B3B3B]';  
    default:
      break;
  }
  return (
    <div {...rest} className={`text-white text-center font-semibold text-[12px] px-2 py-1 rounded-full ${bgButtonColor} md:px-8 lg:py-2`}>
        <p>{children}</p>
    </div>
  )
}

export default Button