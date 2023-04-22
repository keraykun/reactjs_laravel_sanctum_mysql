import { NavLink, Outlet,Navigate } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useEffect } from "react"
import { useStateContext } from "../context/useContextProvider"

function UserLayout(){

    const {role,setRole,token,setToken,userAccess} = useStateContext()

     useEffect(()=>{
         if(token){
          axiosClient.get('user/profile').
             then((data)=>{
                setRole(data.data.role.name)
             }).catch((error)=>{
                if(error.code==='ERR_NETWORK'){
                    window.location.replace("/connection")
                }
                 console.log(error,'user')
             })

         }
     },[token])

     function onLogOut(e){
         e.preventDefault()
         axiosClient.post('/logout').
         then((data)=>{
            setRole({})
            setToken(null)
            localStorage.clear()
       })
     }

     return role===null? <div>Loading..</div> :
     role==='user' ?
     <div id="defaultLayout">
        <aside>
            <NavLink to='/'> Landinge Page</NavLink>
            <NavLink className="user-isset" to='/user/dashboard'> Dashboard</NavLink>
            <NavLink className="user-isset" to='/user/profile'>Record</NavLink>
            {/* <NavLink className="user-isset" to='/user/setting'>Setting</NavLink> */}
            <NavLink className="user-isset" to='/bmi-calculator'>Go to BMI</NavLink>
            <NavLink className="user-isset" to='/fat-burner-calculator'>Go to FBC</NavLink>
            <NavLink className="user-isset" to='/' onClick={onLogOut}>Logout</NavLink>
        </aside>
        <div className="content">
        <header>
            <div>{userAccess}</div>
        </header>
        <main>
        <Outlet/>
        </main>
        </div>
    </div>
    : <Navigate to="/404"/>
}
export default UserLayout
