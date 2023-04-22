import { useNavigate,Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useStateContext } from "../context/useContextProvider";
import axiosClient from "../../axios-client";
import UserAccess from "../../components/auth/UserAccess"
import Loader from "../Loader";

export default function Login (){

    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState("");

    const {setRole,token,setToken,role,setAuthRole,setUserAccess} = useStateContext()

    const onHandlerSubmit = (ev) =>{
        ev.preventDefault()

        const payload = {
            email:email.current.value,
            password:password.current.value,
        }

        axiosClient.get('/csrf-cookie').then(response => {
            setLoading(true)
            axiosClient.post('/login',payload).
                then(({data})=>{
                    setLoading(false)
                    setErrors(data.message)
                    setToken(data.token)
                    setLoading(false)
                    if(data.user.role.name==='user'){
                        setUserAccess(data.user.name)
                        setRole(data.user.role.name)
                        setAuthRole(data.user.role.name)
                        navigate("/user/dashboard");
                    }else if(data.user.role.name==='admin'){
                        setUserAccess(data.user.name)
                        setRole(data.user.role.name)
                        setAuthRole(data.user.role.name)
                        navigate("/admin/dashboard");
                    }else{
                        throw Error('user data not found')
                    }

                }).
                catch(error=>{
                    if(error.code==='ERR_NETWORK'){
                        window.location.replace("/connection")
                    }
              })
        }).
        catch(error=>{
            if(error.code==='ERR_NETWORK'){
                window.location.replace("/connection")
            }
      })
    }

    return loading? <Loader/> :
    token? <UserAccess role={role}/> :
    <div className="animated fadeInDown m-5 relative flex flex-col justify-start items-start overflow-hidden shadow-xl">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
    <div>
    <h1 className="text-2xl font-bold text-center">Login to Health and Nutrition Monitoring System</h1>
    </div>
      <div className="w-full text-red-700  text-center py-2 text-lg">
      <span>{ errors }</span>
      </div>
        <form onSubmit={onHandlerSubmit} className="mt-6">

            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Email
                </label>
                <input
                required
                    ref={email}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                required
                    ref={password}
                    type="password"
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <a
                href="#"
                className="text-lg text-red-600 hover:underline"
            >
                Forget Password?
            </a>
            <div className="mt-6">
                <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-600">
                    Login
                </button>
            </div>
        </form>
    </div>
    </div>

}
