"use client"
import React, { useState } from 'react'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaEyeSlash,FaRegEye,FaLock   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CurrentPage } from '../store/Page';
// import { LockClosedIcon, EyeIcon, EyeSlashIcon, PhoneIcon } from "@heroicons/react/24/outline";
function Signup() {
    const [LoginOption,setLoginOption]=useState<boolean>(true);
    const [canSeepassword,setcanSeepasseord]=useState<boolean>(true)
    const {setCurrentPage } = CurrentPage();
  return (
    <div>
      <form className="space-y-4 max-w-sm mx-auto mt-20 w-[30vw]">

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
            bg-white/30 text-white `} placeholder={LoginOption?"1234567890":"example@gmail.com" }></input>
        </div>



        <div className='relative flex '>
            <div className="absolute inset-y-0 top-0 left-3 flex items-center text-white/80">
               <FaLock className="w-4 h-4" />
                
                
            </div>
             <input type={canSeepassword?"email":"password"} className=" w-full px-3 py-2 border rounded-full pl-12 pr-12  focus:ring-blue-500 border-0
    bg-white/30 text-white " placeholder="Password" ></input>
            <span className='absolute right-4 top-3' >
                <button onClick={(e)=>{e.preventDefault()
                    setcanSeepasseord(!canSeepassword)
                    console.log("clicked")
                }} className=''>
                    {canSeepassword?(<FaRegEye  className="w-5 h-5" />):(<FaEyeSlash className="w-5 h-5" />)
                  
                    }
                </button>
                  
                </span>


         </div>





        <div className='relative flex '>
            <div className="absolute inset-y-0 top-0 left-3 flex items-center text-white/80">
               <FaLock className="w-4 h-4" />
                
                
            </div>
             <input type={canSeepassword?"email":"password"} className=" w-full px-3 py-2 border rounded-full pl-12 pr-12  focus:ring-blue-500 border-0
    bg-white/30 text-white " placeholder="confirm password" ></input>
            <span className='absolute right-4 top-3' >
                <button onClick={(e)=>{e.preventDefault()
                    setcanSeepasseord(!canSeepassword)
                    console.log("clicked")
                }} className=''>
                    {canSeepassword?(<FaRegEye  className="w-5 h-5" />):(<FaEyeSlash className="w-5 h-5" />)
                  
                    }
                </button>
                  
                </span>


         </div>


  

  <button type="submit" className="w-full mt-4 py-2 bg-white text-black font-bold rounded-full 
                    hover:bg-black hover:text-white">
    Submit
  </button>
  
  <div className='ml-[20%] mt-10'>
  <span >You  have account? <button onClick={(e)=>{
    e.preventDefault();
    console.log("pressed")
    setCurrentPage("Login")
  }} className='font-bold hover:cursor-pointer'>Login</button></span>
  </div>
      </form>
    </div>
  )
}

export default Signup
