import { NavLink, Outlet,Navigate, useNavigate } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useEffect,useState } from "react"
import { useStateContext } from "../context/useContextProvider"
import Loader from "../Loader"


function AdminLayout(){

   const {role,setRole,setToken,token,userAccess} = useStateContext()
   const [loading,setLoading] = useState(false);
   const navigate = useNavigate()

    useEffect(()=>{
        if(token){
        setLoading(true)
         axiosClient.get('admin/profile').
            then((data)=>{
               setRole(data.data.role.name)
               setLoading(false)
            }).catch((error)=>{
                if(error.code==='ERR_NETWORK'){
                    window.location.replace("connection")
                }
                console.log(error,'admin')
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

   return role===null? <div><Loader/></div> :
     role==='admin' ?
    <div id="defaultLayout" className="flex flex-row">
        <aside>
            <NavLink to='/'> Landinge Page</NavLink>
            <NavLink className="user-isset" to='/admin/dashboard'> Dashboard</NavLink>
            <NavLink className="user-isset" to='/admin/fruits'> Fruits</NavLink>
            <NavLink className="user-isset" to='/admin/vagetables'> Vagetables</NavLink>
            <NavLink className="user-isset" to='/admin/meats'> Meats</NavLink>

            {/* <NavLink className="user-isset" to='/admin/profile'>Profile</NavLink>
            <NavLink className="user-isset" to='/admin/setting'>Setting</NavLink>
            <NavLink className="user-isset" to='/admin/product'>Product</NavLink> */}
            <NavLink className="user-isset" to='/' onClick={onLogOut}>Logoutss</NavLink>
        </aside>
        <div className="content">
        <header>
            <div>{userAccess}</div>
        </header>
        <main className="relative">
        <Outlet/>
        </main>
        </div>
    </div>
      : <Navigate to="/404"/>
}
export default AdminLayout

