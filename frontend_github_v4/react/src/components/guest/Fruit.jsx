import { Outlet } from "react-router-dom";

import axiosClient from "../../axios-client";

export const FruitLoader = async() =>{
    const {data} = await axiosClient.get('/guest/fruit/index')
    return data.data
}

export default function Fruit(){
    return(
    <div className='w-full h-full' style={{ background:' rgb(248 250 252)' }}>
        <div className='max-w w-[80%] mx-auto flex flex-col gap-5 py-20'>
            <Outlet/>
        </div>
    </div>)
}
