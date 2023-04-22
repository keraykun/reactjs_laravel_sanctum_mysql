import React, { useState, useEffect } from 'react'

import {
    Input,
  } from "@material-tailwind/react";

export default (props) => {


  const [isValidState, setIsValidState] = useState(false)

  const signalParent = (isValid) => {
     setIsValidState(isValid)
     props.signalIfValid(isValid)
  }
  useEffect(() => {
    signalParent(isValidState)
    props.setNextDisplayLine(false)
    props.setPrevDisplayLine(true)
  }, [])



  return (
    <div>
       <div className="animated fadeInDown m-5 relative flex flex-col justify-start items-start overflow-hidden ">
       <div className="flex gap-10 uppercase font-bold text-md text-green-900">
       Register Account
        </div>
    <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
      <div className="w-full text-red-700  text-center py-2 text-lg">
      </div>
            <div className="mb-5">
                <label className='text-red-700 font-bold' htmlFor="">{props.errors}</label>
                <Input
                label="Email"
                    value={props.email}
                    type="text"
                    onChange={e=>{
                        if(e.target.value.length<=5){
                            props.setErrors('Email is too short')
                            props.setEmail(e.target.value)
                        }else{
                            props.setErrors('')
                            props.setEmail(e.target.value)
                        }

                    }}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-5">
                <Input
                label="Password"
                value={props.password}
                onChange={e=>{
                    if(e.target.value.length<=5){
                        props.setErrors('Password is too short')
                        props.setPassword(e.target.value)
                    }else{
                        props.setErrors('')
                        props.setPassword(e.target.value)
                    }

                }}
                type="password"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-5">
                <Input
                label="Confirm Password"
                value={props.confirmpassword}
                onChange={e=>{
                    if(e.target.value!==props.password){
                        props.setErrors('Password not match')
                        props.setconfirmPassword(e.target.value)
                    }else{
                        props.setErrors('')
                        props.setconfirmPassword(e.target.value)
                    }

                }}
                type="password"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            {props.email!='' && props.password!='' && props.confirmpassword!=''?
            <div className="flex gap-10 relative">
                {props.password===props.confirmpassword?
                <button className='bg-green-600 px-4 py-2 text-white' onClick={props.onHandlerSubmit}>Submit</button>
                :
                <button className='bg-green-600 px-4 py-2 text-white'  onClick={ e=>props.setErrors('Password not match')}>Submit</button>
                }

            </div>
             :
             <div className="flex gap-10 relative">
                  <button className='bg-green-600 px-4 py-2 text-white'  onClick={ e=>props.setErrors('Please fill up all Fields')}>Submit</button>
             </div>
            }
    </div>
    </div>
    </div>
  )
}
