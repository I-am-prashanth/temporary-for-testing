import { create } from "zustand";


interface Page{
    currentpage:string
    setCurrentPage:(name:string)=>void;
}

export const CurrentPage=create<Page>((set)=>({
    currentpage:"Signup",
    setCurrentPage:(name)=>set({currentpage:name}),
}))

