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
      <div className="relative h-screen" >
        <img src="bg-image.jfif" className="absolute inset-0 w-full h-full object-fill" />
        <div className="h-screen w-screen relative z-10 text-white
        
        bg-gradient-to-t from-black/90 to-black/60 ">
        <div className="flex gap-36 ml-[12vw] relative pt-16">
            <div className="mt-[15%]"><Logo /> </div>
         {currentpage=="Signup"?(<Signup />):(
          <>
          {currentpage=="Login"?(<Login />):(<ResetPassword />)}
          </>
          )
        }
        
        </div>
        
        </div>

      </div>
      
  );
}
