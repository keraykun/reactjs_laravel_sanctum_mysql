import React from "react"
import { useState } from "react"
import { HiCheckCircle } from "react-icons/hi";
import axiosClient from '../../../axios-client.js'
import { Link,useLoaderData } from "react-router-dom";
import Allergy from "./Allergy.jsx"
import Exercise from "./Exercise.jsx"
import Form from "./Form.jsx"
import Details from "./Details.jsx"
import { useStateContext } from "../../context/useContextProvider.jsx"
import MultiStep from 'react-multistep'

export const userChoicesLoader = async() => {
    const [health,goals] = await Promise.all([
         axiosClient.get('/healthissue'),
         axiosClient.get('/goals')
     ]);
     return { health,goals };
}







export default function Register(){

  const userChoice = useLoaderData()


  const {setToken,setUser} = useStateContext()

  const [goal,setGoal] = useState('');

  const [healthissue,setHealthissue] = useState('')
  const [gender,setGender] = useState('')
  const [contact,setContact] = useState('')
  const [birthdate,setBirthdate] = useState('')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmpassword,setconfirmPassword] = useState('')

  const [prevDisplayLine,setPrevDisplayLine] = useState(false)
  const [nextDisplayLine,setNextDisplayLine] = useState(true)
  const [errors,setErrors] = useState([]);

  const [successRegister,setSuccessRegister] = useState(false)

  function onHandlerSubmit (ev){
    ev.preventDefault()
    const payload = {
      goal:goal,
      healthissue:healthissue,
      gender:gender,
      birthdate:birthdate,
      contact:contact,
      name:name,
      email:email,
      password:password
    }

    axiosClient.post('/signup',payload).
        then(({data})=>{
           setErrors(data)
            setSuccessRegister(true)
        }).
        catch(error=>{
            if(error.code==='ERR_NETWORK'){
                window.location.replace("/connection")
            }
        })
  }



  const prevStyle =
    {style:{
         background: '#90ee90',
         padding:'5px 10px',
         marginRight:'20px',color:'green',
         display:prevDisplayLine?'inline':'none'
         },
     title: 'Previous '}

  const nextStyle =
     {style:{
          background: '#90ee90',
          padding:'5px 10px',
          marginRight:'20px',color:'green',
          display:nextDisplayLine?'inline':'none'
          },
      title: 'Next '}

  return(
    <div className="animated fadeInDown w-[50%] m-5 relative flex flex-col justify-start items-start overflow-hidden shadow-xl">
        {successRegister?
        <div className="w-full flex py-6 px-[30px] gap-3 m-auto flex-col text-xl items-center justify-center text-green-900 bg-green-50">
          <section className="flex items-center justify-center gap-2">
          <h1 className="font-bold">{errors}</h1>
          <span><HiCheckCircle style={{ fontSize:'2rem' }}/></span>
          </section>
          <section>
            You are a member now  <b>{name}</b> in <b>Health and Nutrition Monitoring System</b><br />
            start your Health and exercise. Click to <Link className="bg-green-500 px-2 pb-1 rounded-lg text-white" to="/login">Login</Link>
          </section>
        {/* {errors} */}
        </div>
        :
        <div className="w-full p-6 m-auto bg-white lg:max-w-xl">
        <MultiStep
         title={false}
         stepCustomStyle={{width:'100%',color:'green'}}
         showTitles={true}
         prevButton={prevStyle}
         nextButton={nextStyle}
         showNavigation={true}
          >
          <Exercise
          goalsData={userChoice.goals.data}
          setNextDisplayLine={setNextDisplayLine}
          setPrevDisplayLine={setPrevDisplayLine}
          goal={goal}
          setGoal={setGoal}
          title='Goal'
          />

          <Allergy
          healthData={userChoice.health.data}
          setNextDisplayLine={setNextDisplayLine}
          setPrevDisplayLine={setPrevDisplayLine}
          healthissue={healthissue}
          setHealthissue={setHealthissue}
          title='Health Issue'/>

          <Details
          errors={errors}
          setErrors={setErrors}
          setNextDisplayLine={setNextDisplayLine}
          setPrevDisplayLine={setPrevDisplayLine}
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          setGender={setGender}
          birthdate={birthdate}
          setBirthdate={setBirthdate}
          title='Details'/>

         <Form
          title='Account'
          errors={errors}
          setErrors={setErrors}
          setSuccessRegister={setSuccessRegister}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmpassword={confirmpassword}
          setconfirmPassword={setconfirmPassword}
          setNextDisplayLine={setNextDisplayLine}
          setPrevDisplayLine={setPrevDisplayLine}
          onHandlerSubmit={onHandlerSubmit}
          />

         </MultiStep>
      </div>
        }
    </div>
  )
}
