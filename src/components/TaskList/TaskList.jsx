import React from 'react'

function TaskList() {
  return (
    <div className='h-[55%] flex gap-5 overflow-x-auto py-5 w-full flex-nowrap bg-red-400 mt-10 rounded-xl'>
      <div className="flex-shrink-0 h-full  w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full  w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full  w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full  w-[300px] bg-yellow-400 rounded-xl"></div>
    </div>
  )
}

export default TaskList 
