import { BiWifiOff,BiWifi } from "react-icons/bi";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client";


export default function Connection(){
    const [internet,setInternet] = useState(false)
    useEffect(()=>{
        axiosClient.get('/users').
            then((data)=>{
                setInternet(true)
            }).catch((error)=>{
                if(error.code==='ERR_NETWORK'){
                    setInternet(false)
                }
            })
    },[])

    return internet?
    <div className="max-w-5xl mx-auto flex items-center justify-center min-h-screen h-full">
        <div className="flex flex-col items-center">
            <BiWifi className="text-9xl text-green-400"/>
            <div className="text-4xl font-extrabold text-green-400 drop-shadow-lg text-center">Host Provider has been Connected. <br/> Go to Page. <a className="underline cursor-pointer text-blue-500" onClick={()=>{window.location.replace("/")}}>Click Here</a></div>
        </div>
    </div>
    :
    <div className="max-w-5xl mx-auto flex items-center justify-center min-h-screen h-full">
        <div className="flex flex-col items-center">
            <BiWifiOff className="text-9xl text-red-900"/>
            <div className="text-4xl font-extrabold text-red-900 drop-shadow-lg text-center">No Connection Host Provider. Please Check your Host Provider. or Contact your Administrator.</div>
        </div>
    </div>
}
