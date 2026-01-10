"use client"
import React, { useRef, useState } from 'react'

function Scrollable() {
    const [value, setValue] = useState(50); // percentage 0-100
    const [temp, settemp] = useState(50);
    const sliderRef = useRef<HTMLDivElement>(null);
    const sliderTemp = useRef<HTMLDivElement>(null);

    const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const y = e.clientY - rect.top; // distance from top
    let pct = Math.min(100, Math.max(0, (y / rect.height) * 100));
    pct=parseInt(pct +"")

    setValue(pct);
  };

    const handlePointerTemp = (e: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const y = e.clientY - rect.top; // distance from top
    let pct = Math.min(100, Math.max(0, (y / rect.height) * 100));
    // pct=pct*2000 + 1000
    pct=parseInt(pct)+1
    console.log(pct)
    settemp(pct);
  };

  return (
    <div className='flex flex-row  gap-10 mt-[30vh] ml-[30vw]'>
        <div
        ref={sliderRef}
        className="relative h-60 w-20  rounded-xl overflow-hidden  border-[1px] border-[#ede5e5]"
        onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        handlePointer(e);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 1) handlePointer(e);
      }}
    >
      <div
        className="absolute left-0 bottom-0 w-full bg-blue-500 rounded-b-xl transition-all"
        style={{ height: `${100 - value}%` }}
      />

      <div
        className="absolute w-[60%] h-4 bg-white rounded-full z-10 left-[20%] top-[48%] flex items-center justify-center shadow-[2px_2px_8px_rgba(0,0,0,0.2)]"
      > <span className='text-[12px] text-gray-500 text-center font-medium'>{100-value}%</span></div>
    </div>

        <div className=" relative border-[1px] border-[#ede5e5] h-60 w-20 rounded-lg bg-gradient-to-b from-blue-200 via-white to-yellow-400"
        ref={sliderTemp}
        onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        handlePointerTemp(e);
      }}
        >
            
            <div
        className="absolute w-[60%] h-4 bg-white rounded-full z-10 left-[20%] top-[48%] flex items-center justify-center shadow-[2px_2px_8px_rgba(0,0,0,0.2)]"
        style={{
          top: `${temp}%`,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      > <span className='text-[12px] text-gray-500 text-center font-medium'>{(100-temp)*40+3000}k</span></div>
        </div>
        
    </div>

  )
}

export default Scrollable
