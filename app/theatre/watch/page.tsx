"use client"
import { IoArrowBack } from "react-icons/io5";
import { HiOutlineArrowLeft,HiVolumeOff } from "react-icons/hi";
import { LuLightbulb } from "react-icons/lu";
import { FiMinus,FiPlus  } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";



function Page() {
    const [volume,setvolume]=useState<number>(0)

    const handelClick=(a:string)=>{
        console.log(a);
    }
    const handelMute=(a:string)=>{
        console.log(a);
    }
  return (
    <div
  className="relative w-screen h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/teater.avif')" }}
>
  {/* Header */}
  <div className="flex justify-between items-center px-4 pt-4 text-white
                  md:px-40">
    <Link href="/theatre">
    <button className="text-2xl font-bold md:text-3xl">< IoArrowBack /></button>
    </Link>
    <div className="text-lg font-light md:text-3xl">Home Theatre</div>
    <button className="text-2xl md:text-3xl">< LuLightbulb /></button>
  </div>

  {/* Divider */}
  <div className="w-full h-[2px] bg-white mt-3" />

  {/* Device Labels */}
  <div className="flex justify-between px-4 mt-3 text-white md:px-44">
    <span className="text-orange-400 font-light text-2xl md:text-3xl">Apple TV</span>
    <span className="text-xl font-light md:text-3xl">Marantz:</span>
  </div>

  {/* Turn on / Home */}
  <div className="flex justify-between px-8 mt-12 md:px-44 md:mt-12">
    <Link href="/theatre">
    <button className="px-6 py-3 bg-gray-500/60 rounded-md text-white/80 text-xl font-light hover:font-bold hover:px-5 hover:cursor-pointer hover:bg-black">
      Turn On
    </button>
    </Link>
    <Link href="/">
    <button className="px-6 py-3 bg-gray-500/60 rounded-md text-white/80 text-xl font-light hover:font-bold hover:px-5.5 hover:cursor-pointer hover:bg-black">
      Home
    </button>
    </Link>
  </div>

  {/* Arrow Pad */}
  <div className="flex flex-col items-center mt-8 gap-5 md:mt-4 ">
    <button className=" w-16 h-16  rounded-md pl-3 rotate-90 text-white text-center text-4xl  hover:cursor-pointer hover:bg-black
        
        "
     onClick={(e)=>{e.preventDefault();
        handelClick("up");
     }}>< HiOutlineArrowLeft /></button>

    <div className="flex w-auto gap-0">
      <button className="w-16 h-16 pl-3   mx-2  rounded-md text-white text-4xl  hover:cursor-pointer   hover hover:bg-black"
       onClick={(e)=>{e.preventDefault();
        handelClick("left");
     }}>< HiOutlineArrowLeft /></button>
      <button className=" h-16 w-16  rounded-md text-white text-2xl hover:cursor-pointer  hover:bg-black mx-3">
        ok
      </button>
      <button className=" h-16 w-16 pl-3 rounded-md text-white text-4xl rotate-180  hover:bg-black"
       onClick={(e)=>{e.preventDefault();
        handelClick("right");
     }}>< HiOutlineArrowLeft /></button>
    </div>

    <button className="px-4 py-6  rounded-md text-white text-4xl rotate-270 hover:cursor-pointer  hover:bg-black"
     onClick={(e)=>{e.preventDefault();
        handelClick("down");
     }}>< HiOutlineArrowLeft /></button>
  </div>

  {/* Back + Menu */}
  
   <div className="absolute transition-colors md:bottom-32  left-0 right-0 flex items-center justify-center gap-40 md:gap-[60vw] text-white bottom-64">
    <button className="px-3 py-3 bg-gray-500/90 rounded-md text-white/80 text-xl font-light   hover:font-bold hover:md:w-15.5 hover:md:px-2.5 hover:bg-black">
      Back
    </button> 
     <button className="px-3 py-3 bg-gray-500/90 rounded-md text-white/80 text-xl font-light hover:font-bold  hover:md:px-3 hover:bg-black">
      Menu
    </button>
  </div>



  {/* Bottom Volume */}
  <div className="absolute md:bottom-5 bottom-24   flex items-center justify-center gap-4 text-white  ml-6
                  md:gap-[8vw] md:left-[36vw] ">
    <button className="text-5xl hover:cursor-pointer px-4   hover:text-black" 
     onClick={(e)=>{e.preventDefault();
        handelMute("up");
     }}>< HiVolumeOff /></button>
    <div className='flex gap-16'>
    <button className={`text-5xl  font-light hover:cursor-pointer px-5   hover:text-blue-500 ${volume==0?"text-gray-300/80 hover:text-gray-300/80":""}`}
     onClick={(e)=>{e.preventDefault();
        // handelClick("up");
        if(volume>0){
            setvolume(volume-1)
        }
        console.log(volume)
     }}>< FiMinus /></button>
    <button className="text-5xl  font-light hover:cursor-pointer hover:text-red-600 px-5"
    onClick={(e)=>{e.preventDefault();
        handelClick("up");
        setvolume(volume+1)
        console.log(volume)
     }}>< FiPlus /></button>
    </div>
  </div>
</div>
  )
}

export default Page