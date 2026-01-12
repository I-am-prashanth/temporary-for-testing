"use client"
import React, { useState } from 'react'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaEyeSlash,FaRegEye,FaLock   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CurrentPage } from '../store/Page';


function Login() {
    const [LoginOption,setLoginOption]=useState<boolean>(true);
    const [canSeepassword,setcanSeepasseord]=useState<boolean>(true)
    const {setCurrentPage } = CurrentPage();
  return (
    <div>
          <form className="space-y-4 max-w-sm mx-auto mt-10 w-[30vw]">
    
            <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-green-500"
                onChange={(e)=>{setLoginOption(e.target.checked)}} />
                <legend>Register with {LoginOption?"Email":"phone number"} </legend>
            </div>

            <div className='relative flex '>
                <div className="absolute inset-y-0 left-3 flex items-center text-white/80">
                <span >
                     {LoginOption?(<MdOutlinePhoneIphone className="w-5 h- text-white" />):(<IoMdMail className="w-5 h- text-white" />)}
                </span>
                {LoginOption &&
                <button className='' onClick={(e)=>{e.preventDefault()
                    console.log("pressed")
                   }} >(+1)</button>
                  }
            </div>
            <input type="email" className={` w-full  py-2 border rounded-full ${LoginOption?"pl-18":"pl-10"}  focus:ring-blue-500 border-0
            bg-white/30 text-white `}  placeholder={LoginOption?"1234567890":"example@gmail.com" } ></input>
    
            </div>
    
            <div className='relative flex '>
                <div className="absolute inset-y-0 top-0 left-3 flex items-center text-white/80">
                   <FaLock className="w-4 h-4" />
                    
                    
                </div>
                 <input type={canSeepassword?"email":"password"} className=" w-full px-3 py-2 border rounded-full pl-12 pr-12  focus:ring-blue-500 border-0
        bg-white/30 text-white " placeholder="**************" ></input>
                <span className='absolute right-4 top-3' >
                    <button onClick={(e)=>{e.preventDefault()
                        setcanSeepasseord(!canSeepassword)
                        console.log("clicked")
                    }} className=''>
                        {canSeepassword?(<FaRegEye  className="w-5 h-5" />):(<FaEyeSlash className="w-5 h-5" />)
                      
                        }
                    </button>
                      
                    </span>
                <div className="flex items-center space-x-2">
                
            </div>
            
                
    
             </div>
             <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-green-500" />
                <legend>Remember me </legend>
            </div>
    
      
    
      <button type="submit" className="w-full mt-16 py-2 bg-white text-black font-bold rounded-full 
                        hover:bg-black hover:text-white">
        Submit
      </button>
      <div className='flex flex-col gap-2'>
        <button onClick={(e)=>{e.preventDefault()
            console.log("pressed")
            setCurrentPage("resetPassword")



        }}
        className='font-bold hover:cursor-pointer'>Forgot Password</button>
        <button onClick={(e)=>{e.preventDefault()
            console.log("pressed")
        }}
        className='font-bold hover:cursor-pointer'>Demo  Mode</button>
        
      </div>
      <div className='ml-[20%] mt-10'>
      <span >You don&lsquo;t have account? <button onClick={(e)=>{
        e.preventDefault();
        console.log("pressed")
        setCurrentPage("Signup")
      }} className='font-bold hover:cursor-pointer'>Register</button></span>
      </div>
          </form>
        </div>
  )
}

export default Login
