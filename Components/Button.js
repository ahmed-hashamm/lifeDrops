import Link from 'next/link'
import React from 'react'

const Button = ({href,text}) => {
  return (
   
    <Link href={href} className="text-white  bg-[#FF3130] font-medium rounded-2xl text-sm px-5 py-2 text-center hover:scale-105 hover:font-bold duration-200">{text}</Link>
    
  )
}

export default Button