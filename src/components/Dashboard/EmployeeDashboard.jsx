import React from 'react'
import Header from '../Others/Header'
import TaskListsNumber from '../Others/TaskListsNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-15 bg-[#1C1C1C] h-screen'>
      <Header />
    <TaskListsNumber />
    <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
