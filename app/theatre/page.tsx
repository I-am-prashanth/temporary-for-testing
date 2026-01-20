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
  <div className="flex justify-between items-center px-4 pt-4 text-white">
    <button className="text-2xl font-bold">< IoArrowBack /></button>
    <div className="text-lg font-light">Home Theatre</div>
    <button className="text-2xl">< LuLightbulb /></button>
  </div>

  {/* Divider */}
  <div className="w-full h-[2px] bg-white mt-3" />

  {/* Device Labels */}
  <div className="flex justify-between px-4 mt-3 text-white ">
    <span className="text-orange-400 font-light text-2xl">Apple TV</span>
    <span className="text-xl font-light">Marantz:</span>
  </div>

  {/* Turn on / Home */}
  <div className="flex justify-between px-8 mt-20">
    <Link href="/theatre/watch">
    <button className="px-3 py-3 bg-gray-500/60 rounded-md text-white/80 text-xl font-light">
      Turn On
    </button>
    </Link>
    <Link href="/">
    <button className="px-3 py-3 bg-gray-500/60 rounded-md text-white/80 text-xl font-light">
      Home
    </button>
    </Link>
  </div>

  {/* Arrow Pad */}
  <div className="flex flex-col items-center mt-15 gap-4">
    <button className="px-4 py-6 bg-gray-500/70 rounded-md text-white text-4xl rotate-90"
     onClick={(e)=>{e.preventDefault();
        handelClick("up");
     }}>< HiOutlineArrowLeft /></button>

    <div className="flex gap-4">
      <button className="px-6 py-3 bg-gray-500/70 rounded-md text-white text-4xl"
       onClick={(e)=>{e.preventDefault();
        handelClick("left");
     }}>< HiOutlineArrowLeft /></button>
      <button className="px-8 py-3 bg-gray-500/70 rounded-md text-white text-2xl">
        ok
      </button>
      <button className="px-6 py-2 bg-gray-500/70 rounded-md text-white text-4xl rotate-180"
       onClick={(e)=>{e.preventDefault();
        handelClick("right");
     }}>< HiOutlineArrowLeft /></button>
    </div>

    <button className="px-4 py-6 bg-gray-500/70 rounded-md text-white text-4xl rotate-270 hover:cursor-pointer"
     onClick={(e)=>{e.preventDefault();
        handelClick("down");
     }}>< HiOutlineArrowLeft /></button>
  </div>

  {/* Back + Menu */}
  
   <div className="flex justify-between px-8 mt-15">
    <button className="px-3 py-3 bg-gray-500/90 rounded-md text-white/80 text-xl font-light">
      Back
    </button>
    <button className="px-3 py-3 bg-gray-500/90 rounded-md text-white/80 text-xl font-light">
      Menu
    </button>
  </div>



  {/* Bottom Volume */}
  <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center gap-6 text-white">
    <button className="text-5xl" 
     onClick={(e)=>{e.preventDefault();
        handelMute("up");
     }}>< HiVolumeOff /></button>
    <div className='flex gap-30'>
    <button className={`text-5xl font-light ${volume==0?"text-gray-300/80":""}`}
     onClick={(e)=>{e.preventDefault();
        // handelClick("up");
        if(volume>0){
            setvolume(volume-1)
        }
        console.log(volume)
     }}>< FiMinus /></button>
    <button className="text-5xl font-light"
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
