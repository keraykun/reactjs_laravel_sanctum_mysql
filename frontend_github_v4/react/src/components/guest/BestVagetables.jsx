import {  Outlet } from "react-router-dom";
export default function BestVagetables(){
    return(
    <div className='w-full h-full'>
        <div className='max-w w-[80%] mx-auto flex flex-col gap-5 py-20'>
            <div className="text-2xl text-green-900 font-bold"><h1>THE BEST VAGETABLES WEIGHT AND HEALTH OF {(new Date().getFullYear())}</h1></div>
            <Outlet/>
        </div>
    </div>)
}
