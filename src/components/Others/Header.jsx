import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end '>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl fonr-semibold'>Ikram 👋</span></h1>
      <button className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded hover:bg-red-600 '>Log out</button>
    </div>
  )
}

export default Header
