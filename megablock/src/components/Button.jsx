import React from 'react'

function Button(
    children,
    type ='button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props // agr maan lo user ne upar defined ke alawa aur bhi kuch props pass kiye hain to ye unko use mein le lega
) {
  return (
    <button className={`px-6 py-2 rounded-lg duration-200 ${bgColor} ${textColor} ${className}`}>
        {children}
    </button> 
  )
}

export default Button
