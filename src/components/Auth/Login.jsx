import React from 'react'
import { useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submithandler = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault()
        console.log('email is',email)
        console.log('Password',password)
        // Add your login logic here (e.g., API call, form validation, etc.)
    
        setEmail('')
        setPassword('') // Clear the input fields after submission
        // Optionally, redirect the user or show a success message
    
    }


    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => { submithandler(e) }} 
                className='flex flex-col item-center justify-center' action="">
                    <input required
                    value={ email }
                     onChange={(e)=>{
                        setEmail(e.target.value) }} 
                    className=' outline-none border-2 bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
                    <input required
                    value={ password }
                     onChange={(e)=>{
                        setPassword(e.target.value) }} 

                    
                    
                    className='outline-none border-2 bg-transparent border-emerald-600 py-3 px-5 text-xl mt-4 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter Your Password' />
                    <button className='mt-5 text-xl text-white bg-emerald-600 py-3 px-5 rounded-full w-1/3 self-center hover:bg-emerald-700'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
