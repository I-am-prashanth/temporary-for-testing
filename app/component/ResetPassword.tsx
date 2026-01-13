"use client"
import React, { useState } from 'react'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { CurrentPage } from '../store/Page';

function ResetPassword() {
  const text="<- back"
  const [LoginOption,setLoginOption]=useState<boolean>(true);
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
          <form className="space-y-4 max-w-sm mx-auto md:mt-20 w-full md:w-full md:mx-0 lg:w-full lg:ml-0">
    
            <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-green-500"
                defaultChecked={LoginOption} onChange={(e)=>{setLoginOption(e.target.checked)}} />
                <legend>Register with phone number </legend>
            </div>
    
    
    
    
    
            <div className='relative flex '>
                <div className="absolute inset-y-0 left-3 flex items-center text-white/80">
                <span >
                  {LoginOption?(<MdOutlinePhoneIphone className="w-5 h- text-white" />):(<IoMdMail className="w-5 h- text-white" />)}
                    
                </span>{LoginOption &&
                <button className='' onClick={(e)=>{e.preventDefault()
                    console.log("pressed")
                   }} >(+1)</button>
                  }
            </div>
            <input type="email" className={` w-full  py-2 border rounded-full ${LoginOption?"pl-18":"pl-10"}  focus:ring-blue-500 border-0
            bg-white/20 text-white `} placeholder={LoginOption?"1234567890":"example@gmail.com" } ></input>
            </div>
    

      
    
      <button type="submit" className="w-full mt-4 py-2 bg-white text-black font-bold rounded-full 
                        hover:bg-black hover:text-white hover:cursor-pointer"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => login(e)}>
        Submit
      </button>
      
      <div className='ml-[42%] mt-74 md:mt-20'>
       <button  className='font-bold hover:cursor-pointer' 
       onClick={(e)=>{
        e.preventDefault();
        setCurrentPage("Login")
      }}>{text}</button>
      </div>
          </form>
        </div>
  )
}

export default ResetPassword
