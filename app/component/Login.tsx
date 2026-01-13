"use client"
import React, { useState } from 'react'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaEyeSlash,FaRegEye,FaLock   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CurrentPage } from '../store/Page';


function Login() {
    const [LoginOption,setLoginOption]=useState<boolean>(false);
    const [canSeepassword,setcanSeepasseord]=useState<boolean>(true)
    const [user,setuser]=useState("");
    const [password,setPassword]=useState("");
    const {setCurrentPage } = CurrentPage();

    const login=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        console.log(user);
        console.log(password)
    }
    
    
  return (
    <div>
          <form className=" max-w-sm  lg:mt-20 lg:w-[30vw] space-y-4 md:mt-20 md:w-full ">
    
            <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" className="lg:h-4 lg:w-4 rounded border-gray-300 focus:ring-green-500"
                onChange={(e)=>{setLoginOption(e.target.checked)}}
                defaultChecked={LoginOption} />
                <legend>Register with phone number </legend>
            </div>

            <div className='relative flex '>
                <div className="absolute inset-y-0  flex items-center text-white/80 left-3 py-1">
                <span >
                     {LoginOption?(<MdOutlinePhoneIphone className="w-5  text-white" />):(<IoMdMail className="w-5 text-white" />)}
                </span>
                {LoginOption &&
                <button onClick={(e)=>{e.preventDefault()
                   }} >(+1)</button>
                  }
            </div>
            <input type="email" className={` w-full  py-2 border rounded-full ${LoginOption?"pl-18":"pl-10"}  focus:ring-blue-500 border-0
            bg-white/20 text-white `}  placeholder={LoginOption?"1234567890":"example@gmail.com"} value={user} onChange={(e)=>{setuser(e.target.value)}}  />
                
            </div>
    
            <div className='relative flex '>
                <div className="absolute inset-y-0 top-0 left-3 flex items-center text-white/80">
                   <FaLock className="w-4 h-4" />
                    
                    
                </div>
                 <input type={canSeepassword?"email":"password"} className=" w-full px-1 py-2 rounded-full pl-12 pr-12  focus:ring-blue-500 border-0
        bg-white/20 text-white " placeholder="**************" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <span className='absolute right-4 top-3' >
                    <button onClick={(e)=>{e.preventDefault()
                        setcanSeepasseord(!canSeepassword)
                    }}>
                        {canSeepassword?(<FaRegEye  className="w-5 h-5" />):(<FaEyeSlash className="w-5 h-5" />)
                      
                        }
                    </button>
                      
                    </span>
               
            
                
    
             </div>



             <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-green-500" />
                <legend>Remember me </legend>
            </div>
    {/* <span className='errorData'>kk</span> */}
      
    
      <button type="submit" className="w-full mt-16 py-2 bg-white text-black font-extrabold rounded-full 
                        hover:bg-black hover:text-white" onClick={(e: React.MouseEvent<HTMLButtonElement>) => login(e)}>
        Login
      </button>
      <div className='flex flex-col gap-2'>
        <button onClick={(e)=>{e.preventDefault()
            setCurrentPage("resetPassword")



        }}
        className='font-bold hover:cursor-pointer'>Forgot Password</button>
        <button onClick={(e)=>{e.preventDefault()
        }}
        className='font-bold hover:cursor-pointer'>Demo  Mode</button>
        
      </div>
      <div className='w-full mt-10 text-center text-[15px] font-light '>
      <span className='text-gray-300'>You don&lsquo;t have account? <button onClick={(e)=>{
        e.preventDefault();
        setCurrentPage("Signup")
      }} className='font-bold hover:cursor-pointer text-white'>Register</button></span>
      </div>
          </form>
        </div>
  )
}

export default Login
