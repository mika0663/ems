import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext'
import  TaskContext from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </React.StrictMode>
)
