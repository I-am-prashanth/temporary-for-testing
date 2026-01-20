"use client"
import { IoArrowBack } from "react-icons/io5";
import { SiAppletv } from "react-icons/si";
import { RiSpeedUpLine } from "react-icons/ri";
import { FaTv } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";

function Page() {
    const [Theatre,setTheatre]=useState<boolean>(false);
    const [mode,setmode]=useState("Ac");

  return (
    <div
  className="relative w-screen h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/teater.avif')" }}
>
  {/* Header */}
  <div className="flex justify-between items-center px-4 pt-4 text-white w-[68%]">
    <Link href="/theatre">
    <button className="text-2xl font-bold">< IoArrowBack /></button>
    </Link>
    <div className="text-lg font-light">Home Theatre</div>
    
  </div>

  {/* Divider */}
  <div className="w-full h-[2px] bg-white mt-2" />


  {/* Device Labels */}
  <div className="flex justify-between px-4 mt-3 text-white ">
    <span className=" font-light text-2xl">Watch Movie</span>
  </div>

  {/* Turn on / Home */}
  <div className="flex gap-8 px-16 mt-10 ml-4">
    <button className={ `px-3 py-5 bg-gray-500/90 rounded-md ${Theatre?"text-white font-extrabold":"text-white/60  font-medium"} `}
     onClick={(e)=>{e.preventDefault();
        setTheatre(true)
     }}>
      Theatre On
    </button>
    <button className={`px-2 py-4 bg-gray-500/90 rounded-md ${Theatre==false?"text-white font-extrabold":"text-white/60  font-medium"}`}
     onClick={(e)=>{e.preventDefault();
        setTheatre(false)
     }}>
      Theatre Off
    </button>
  </div>
  

  {/* Back + Menu */}
  
   <div className="flex  px-8 mt-84 w-[90%] h-30 rounded-[6px] bg-gray-500/90 ml-[5%] items-center gap-12">
    
    <div className="px-6 py-3 bg-none rounded-md text-white/80 text-xl flex flex-col">
    <span>Watch</span>
    <span>Apple TV</span>
    </div>
    {/* <div></div> */}
    <div className='text-5xl bg-white text-black/60 p-2 rounded-[8px]'>< SiAppletv /></div>
    
  </div>



  {/* Bottom Volume */}
  <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center gap-12 text-white">
    <button className={`text-4xl ${mode=="Bulb"?"text-orange-300":""}`}
     onClick={(e)=>{e.preventDefault();
        setmode("Bulb")
     }}>< LuLightbulb /></button>

    <button className={`text-4xl ${mode=="Ac"?"text-orange-300":""}`}
     onClick={(e)=>{e.preventDefault();
        setmode("Ac")
     }}>< RiSpeedUpLine /></button>

    <button className={`text-4xl  ${mode=="TV"?"text-orange-300":""}`} 
     onClick={(e)=>{e.preventDefault();
        setmode("TV")
     }}>< FaTv /></button>
  </div>
</div>
  )
}

export default Page
