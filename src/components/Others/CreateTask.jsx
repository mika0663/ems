import React from 'react'
const CreateTask = () => {
  return (
   
        <div className='bg-[#1c1c1c] mt-7 rounded'>
            <form className=' flex flex-wrap w-full  items-start justify-between p-5 rounded-lg' action="">
            <div className='w-1/2'>
                <h3 className='text-white mb-2'>Task Title</h3>
                <input className='border-2 bg-white text-gray-900 rounded p-2 w-11/12' type="text" placeholder='Making a UI Design'/>
                    
                <div className='mt-4'>
                <h3 className='text-white mb-2'>Date</h3>
                <input className='border-2 bg-white text-gray-900 rounded p-2 w-11/12' type="date" placeholder='2023-10-10'/>
                </div>
                
                <div className='mt-4'>
                <h3 className='text-white mb-2'>Assign to</h3>
                <input className='border-2 bg-white text-gray-900 rounded p-2 w-11/12' type="text" placeholder='employee name'/>
                </div>
                
                <div className='mt-4'>
                <h3 className='text-white mb-2'>Category</h3>
                <input className='border-2 bg-white text-gray-900 rounded p-2 w-11/12' type="text" placeholder='Design, dev, etc'/>
                </div>
            </div>
            
            <div className='w-1/2'> 
                <h3 className='text-white mb-2'>Description</h3>
                <textarea className='border-2 bg-white text-gray-900 rounded p-2 w-full' name="" id="" cols="30" rows='10'></textarea>
                <div className='flex justify-center mt-4'>
                    <button className='bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded'>Create Task</button>
                </div>
            </div>
            </form>
        </div>
  )
}

export default CreateTask
