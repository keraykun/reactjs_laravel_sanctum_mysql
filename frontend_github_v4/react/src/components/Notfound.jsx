import { useState } from "react"
import { Link } from "react-router-dom"
export default function NotFound(){
    const [role,setRole] = useState(localStorage.getItem('USER'))
    const redirectBack =(value) =>{
        switch (value) {
            case 'admin':
                return <p><span className="text-9xl mr-3"> 404</span> Page Not Found Redirect Back to <Link className="text-blue-500" to='/admin/dashboard'>DASHBOARD</Link></p>
            case 'user':
                return <p><span className="text-9xl mr-3"> 404</span> Page Not Found Redirect Back to <Link className="text-blue-500" to='/user/dashboard'>DASHBOARD</Link></p>
            default:
                localStorage.clear()
                return <p><span className="text-9xl mr-3"> 404</span> Page Not Found Redirect Back to <button className="text-blue-500" onClick={()=>window.location.replace("/login")}>LOGIN</button></p>
        }
    }


    return (
        <div className="max-w-5xl mx-auto flex items-center justify-center min-h-screen h-full">
        <div className="flex flex-col items-center">
             <img className="w-[50%]" src="../../src/images/bug.png" alt="" />
            <div className="text-4xl font-extrabold text-red-900 drop-shadow-lg text-center">  {redirectBack(role)}</div>
        </div>
    </div>
      )
}
