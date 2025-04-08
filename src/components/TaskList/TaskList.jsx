import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex gap-5 py-5 w-full flex-nowrap  mt-10 rounded-xl'>
      <div className="flex-shrink-0 h-full  w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 fed 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>Make a Youtube Video</h2>
            <p className='text-m mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 fed 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>Make a Youtube Video</h2>
            <p className='text-m mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
      <div className="flex-shrink-0 h-full  w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 fed 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>Make a Youtube Video</h2>
            <p className='text-m mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
      <div className="flex-shrink-0 h-full  w-[300px] p-5 bg-red-400 rounded-xl">
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 fed 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>Make a Youtube Video</h2>
            <p className='text-s mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
      
    </div>
  )
}

export default TaskList
