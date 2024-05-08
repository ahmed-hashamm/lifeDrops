import React from 'react'

const Button = ({text,type}) => {
  return (
    <button
              type={type}
              className="text-white bg-[#ef233c]  hover:bg-white hover:ring-[2px] hover:ring-[#ef233c] hover:text-[#ef233c] focus:outline-none hover:scale-105 transition-all duration-500  font-medium rounded-full text-sm  px-5 py-2.5 text-center "
            >
              {text}
            </button>
  )
}

export default Button