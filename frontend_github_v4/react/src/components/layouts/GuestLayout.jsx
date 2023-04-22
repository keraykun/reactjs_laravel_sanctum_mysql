import { Outlet,Link,NavLink} from "react-router-dom";
import { useRef,useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { useStateContext } from "../context/useContextProvider"
import axiosClient from "../../axios-client";
import Loader from "../Loader";



export default function GuestLayout(){

    const {role,setRole,token} = useStateContext()
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        if(token){
        setLoading(true)
        axiosClient.get('/users').
            then((data)=>{
               setRole(data.data.role.name)
               setLoading(false)
            }).catch((error)=>{
                if(error.code==='ERR_NETWORK'){
                    window.location.replace("/connection")
                }
               console.log(error,'admin')
            })
        }
    },[])


    const refs = useRef()

    const linkToHistory = (e) =>{
        refs.value = e.currentTarget.parentElement.
        parentElement.previousSibling.
        children[0].textContent
    }

    return loading?<Loader/>:
    <div className="h-screen flex flex-col items-stretch">
        <nav className="guest flex justify-around h-28 bg-white flex-none px-5 z-10">
            <div className="hero-list flex items-center p-5 text-slate-700">
                <h1 className="text-2xl font-sans text-bold drop-shadow-lg hero-title tracking-wide">Health and Nutrition Monitoring System</h1>
            </div>
            <ul className="flex text-white text-xl items-center gap-10">
                <li className="cursor-pointer  text-green-700 hover:text-green-500 hover:border-b-2 border-green-400">
                    <Link to="/"  ref={refs} onClick={linkToHistory} className="guest">Home</Link>
                </li>
                <li className="cursor-pointer dropdown hover:text-green-500 hover:border-b-2 border-green-400">
                    <span className="dropbtn text-green-700 ">
                       <div className="flex items-center"><div className={refs.value=="Resources"?'parent-guest active':''}>Resources</div><RxCaretDown/></div>
                       <ul className="dropdown-content flex-col gap-3 p-2 text-green-900">
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="resource-fruits">Fruits</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink  ref={refs} onClick={linkToHistory}  className="guest" to="resource-vagetables">Vagetables</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink  ref={refs} onClick={linkToHistory}  className="guest" to="resource-meats">Meat</NavLink>
                            </li>
                            {/* <li className="text-lg hover:text-green-500">
                                <NavLink  ref={refs} onClick={linkToHistory}  className="guest" to="resource-fishs">Fish</NavLink>
                            </li> */}
                       </ul>
                    </span>
                </li>
                <li className="cursor-pointer dropdown hover:text-green-500 hover:border-b-2 border-green-400">
                    <span className="dropbtn text-green-700 ">
                    <div className="flex items-center"><div className={refs.value=="Fitness"?'parent-guest active':''}>Fitness</div><RxCaretDown/></div>
                       <ul className="dropdown-content flex-col gap-3 p-2 text-green-900">
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="fitness-beginners">Beginners</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink  ref={refs} onClick={linkToHistory}  className="guest" to="fitness-walking">Walking</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="fitness-cardio">Cardio</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="fitness-strength">Strength</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="fitness-running">Running</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="fitness-yoga">Yoga</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="fitness-all">View All</NavLink>
                            </li>
                       </ul>
                    </span>
                </li>
                <li className="cursor-pointer dropdown hover:text-green-500 hover:border-b-2 border-green-400">
                    <span className="dropbtn text-green-700 ">
                    <div className="flex items-center"><div className={refs.value=="Nutritions"?'parent-guest active':''}>Nutritions</div><RxCaretDown/></div>
                        <ul className="dropdown-content flex-col gap-3 p-2 text-green-900">
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="nutrition-weight-management">Weight Management</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="nutrition-facts">Nutrition Facts</NavLink>

                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="nutrition-diets">Diets</NavLink>

                            </li>
                            <li className="text-lg hover:text-green-500">
                            <NavLink ref={refs} onClick={linkToHistory} className="guest" to="nutrition-meal">Meal Plans</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="nutrition-delivery-service">Meal Delivery Service</NavLink>
                            </li>

                       </ul>
                    </span>
                </li>
                <li className="cursor-pointer dropdown hover:text-green-500 hover:border-b-2 border-green-400">
                    <span className="dropbtn text-green-700 ">
                    <div className="flex items-center"><div className={refs.value=="Tools"?'parent-guest active':''}>Tools</div><RxCaretDown/></div>
                       <ul className="dropdown-content flex-col gap-3 p-2 text-green-900">
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="bmi-calculator">BMI Calculator</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink ref={refs} onClick={linkToHistory} className="guest" to="fat-burner-calculator">Body Fat Percentage Calculator</NavLink>
                            </li>
                            {/* <li className="text-lg hover:text-green-500">
                                <NavLink className="guest">Calories Burned by Activity</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink className="guest">Daily Calories Burned</NavLink>
                            </li>
                            <li className="text-lg hover:text-green-500">
                                <NavLink className="guest">Peace Calculator</NavLink>
                            </li> */}
                       </ul>
                    </span>
                </li>
            </ul>
           {!role?(
           <ul className="flex text-white text-xl items-center gap-10">
                <li className="hover:bg-green-700 rounded-md bg-green-600 cursor-pointer px-3 py-1"><NavLink to='login'>Login</NavLink></li>
                <li className="hover:bg-green-700 rounded-md bg-green-600 cursor-pointer px-3 py-1"><NavLink to='register'>Register</NavLink></li>
            </ul>
            ):
            <ul className="flex text-white text-xl items-center gap-10">
            <li className="hover:bg-green-700 rounded-md bg-green-600 cursor-pointer px-3 py-1">
                {(() => {
                    if (role=='admin') {
                    return (
                        <div><NavLink to='admin'>Home</NavLink></div>
                    )
                    } else if (role=='user') {
                    return (
                        <div><NavLink to='user'>Home</NavLink></div>
                    )
                    } else {
                    return (
                       <>
                        <div><NavLink to='register'>Register</NavLink></div>
                       </>
                    )
                    }
                })()}
            </li>
            </ul>
            }
        </nav>
        <main className="landing-page flex-grow flex items-center w-full justify-center">
        <Outlet/>
        </main>
    </div>
}
