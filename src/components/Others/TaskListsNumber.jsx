import React from 'react'

const TaskListsNumber = () => {
  return (
    <div className='flex mt-10 justify-between screen gap-5 '>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-bold'>Failed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-bold'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400 text-black'>
        <h2 className='text-2xl font-semibold text-black'>0</h2>
        <h3 className='text-xl font-bold text-black'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 text- bg-red-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-bold'>Accepted Task</h3>
      </div>
    </div>
  )
}

export default TaskListsNumber
