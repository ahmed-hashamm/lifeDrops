import React from 'react'

const InputField = ({Name,type,labelText,Min,Max}) => {
  return (
    <>
    <input
                type={type}
                name={Name}
                minLength={Min}
                maxLength={Max}
                
                className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#ef233c] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium focus:bg-white absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ef233c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
              {labelText}
              </label>
    </>
  )
}

export default InputField