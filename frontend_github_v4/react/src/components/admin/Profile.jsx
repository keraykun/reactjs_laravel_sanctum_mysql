import { useEffect } from "react"
import axiosClient from "../../axios-client";

export default function Profile (){

    const showProfile = (event) =>{
        event.preventDefault()
        axiosClient.get('admin/profile').
        then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
    <div>Profileaa  xd
        <button onClick={showProfile}>Click me</button>
    </div>)

}
