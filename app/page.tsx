"use client"
import Login from "./component/Login";
import Logo from "./component/Logo";
import ResetPassword from "./component/ResetPassword";
import Scrollable from "./component/Scrollable";
import Signup from "./component/Signup";
import { CurrentPage } from "./store/Page";


export default function Home() {
  const currentpage = CurrentPage((state) => state.currentpage);
  return (
      <div className="relative h-screen " >
        <img src="bg-image.jfif" className="absolute inset-0 w-full h-screen md:object-fill object-fill" />
        <div className="h-screen w-screen relative z-10 text-white
        bg-gradient-to-t from-black/95 to-gray-700/30 ">

        <div className="flex md:flex-row flex-col  relative w-full pt-[20px] px-[15%] gap-10
                        md:pt-0 md:px-[10%] md:gap-[1vw] lg:gap-0">
            <div className="mt-[15%] ml-[18%] md:ml-0 md:mt-50 flex-1"><Logo /> </div>
            <div className="flex-1">
         {currentpage=="Signup"?(<Signup />):(
          <>
          {currentpage=="Login"?(<Login />):(<ResetPassword />)}
          
          </>
          )
          
        }
        </div>
        </div>
        
        </div>

      </div>
      
  );
}
