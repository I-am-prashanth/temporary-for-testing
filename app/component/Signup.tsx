"use client"
import React, { useState } from 'react'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaEyeSlash,FaRegEye,FaLock   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CurrentPage } from '../store/Page';
function Signup() {
    const [LoginOption,setLoginOption]=useState<boolean>(true);
    const [canSeepassword,setcanSeepasseord]=useState<boolean>(true)
    const {setCurrentPage } = CurrentPage();
    const [user,setuser]=useState("");
    const [password,setPassword]=useState("");
        const login=(e: React.MouseEvent<HTMLButtonElement>)=>{
            e.preventDefault();
            console.log(user);
            console.log(password)
        }
  return (
    <div>
      <form className="space-y-4 max-w-sm mx-auto md:mt-20 w-full md:w-full md:mx-0 lg:w-[30vw] lg:ml-0" autoComplete="off">

        <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-green-500"
                defaultChecked={LoginOption}
                onChange={(e)=>{setLoginOption(e.target.checked)}} />
                <legend>Register with phone number </legend>
            </div>





        <div className='relative flex '>
            <div className="absolute inset-y-0 left-3 flex items-center text-white/80">
            <span >
                 {LoginOption?(<MdOutlinePhoneIphone className="w-5 h- text-white" />):(<IoMdMail className="w-5 h- text-white" />)}
            </span>
            { LoginOption &&
                <button className={LoginOption ? "block" : "hidden"} onClick={(e)=>{e.preventDefault()
                    console.log("pressed")
                   }} >(+1)</button>
                  }
        </div>
        {LoginOption ? (
  <input
    type="email"
    className={`w-full py-2 rounded-full ${LoginOption ? "pl-18" : "pl-10"} focus:ring-blue-500 border-0 bg-white/20 text-white`}
    placeholder="1234567890"
    value={user}
    onChange={(e) => setuser(e.target.value)}
  />
) : (
  <input
    type="text"
    className={`w-full py-2 rounded-full ${LoginOption ? "pl-18" : "pl-10"} focus:ring-blue-500 border-0 bg-white/20 text-white`}
    placeholder="example@gmail.com"
    value={user}
    onChange={(e) => setuser(e.target.value)}
  />
)}
        </div>



        <div className='relative flex '>
            <div className="absolute inset-y-0 top-0 left-3 flex items-center text-white/80">
               <FaLock className="w-4 h-4" />
                
                
            </div>
             <input type={canSeepassword?"name":"password"} className=" w-full px-3 py-2  rounded-full pl-12 pr-12  focus:ring-blue-500 border-0
    bg-white/20 text-white " placeholder="**************"  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
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
             <input type={canSeepassword?"name":"password"} className=" w-full px-3 py-2 rounded-full pl-12 pr-12  focus:ring-blue-500 border-0
    bg-white/20 text-white " placeholder="confirm password" ></input>
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


  

  <button type="submit" className="w-full  py-2 bg-white text-black font-bold rounded-full mt-16
                    hover:bg-black hover:text-white" onClick={(e: React.MouseEvent<HTMLButtonElement>) => login(e)}>
    Submit
  </button>
  
  <div className='ml-[30%] mt-20'>
  <span className='text-[15px] text-gray-400'>You  have account? <button  className='font-bold hover:cursor-pointer text-white' onClick={(e)=>{
        e.preventDefault();
        setCurrentPage("login")
      }}>Login</button></span>
  </div>
      </form>
    </div>
  )
}

export default Signup
