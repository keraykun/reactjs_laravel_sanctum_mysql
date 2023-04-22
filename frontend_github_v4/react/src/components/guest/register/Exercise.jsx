import React, { useState, useEffect } from 'react'

import {
    Radio
  } from "@material-tailwind/react";


export default (props) => {

  const [isValidState, setIsValidState] = useState(false)

  const signalParent = (isValid) => {
     setIsValidState(isValid)
     props.signalIfValid(isValid)
  }
  useEffect(() => {
    signalParent(isValidState)
    props.setNextDisplayLine(true)
    props.setPrevDisplayLine(false)
  }, [])

  return (
    <div>
       <div className="animated fadeInDown m-5 relative flex flex-col justify-start items-start overflow-hidden ">
       <div className="flex gap-10 uppercase font-bold text-md text-green-900">
        Set your goal
        </div>
            <div className="w-full p-6 m-auto bg-white gap-5 flex flex-col rounded-md lg:max-w-xl">
                {props.goalsData.map((goal,index)=>
                    <div key={index} className="flex items-center font-bold bg-green-200 text-white">
                        <Radio
                        color='green'
                        className="p-0 m-0"
                        id={index} name="goal"
                        value={goal.id}
                        onClick={e=>{
                            props.setGoal(goal.id)
                            signalParent(e.target.checked)
                        }}
                        /><label htmlFor="">{goal.name}</label>
                 </div>
                )}
           </div>
    </div>
    </div>
  )
}
