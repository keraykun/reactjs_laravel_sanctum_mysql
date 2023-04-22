import React, { useState, useEffect } from 'react'

import {
    Input,
    Radio,
    Select,
    Option
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
    props.setPrevDisplayLine(true)
  }, [])


  return (
    <div>
       <div className="animated fadeInDown m-5 relative flex flex-col justify-start items-start overflow-hidden ">
       <div className="flex gap-10 uppercase font-bold text-md text-green-900">
       Fill up your Details
        </div>
    <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
      <div className="w-full text-red-700  text-center py-2 text-lg">
      </div>
            <div className="mb-5">
                <label className='text-red-700 font-bold' htmlFor="">{props.errors}</label>
                <Input
                label="Full Name"
                    value={props.name}
                    type="text"
                    onChange={e=>{
                        if(e.target.value.length<=7){
                            props.setErrors('Fullname is too short')
                            props.setName(e.target.value)
                        }else{
                            props.setErrors('')
                            props.setName(e.target.value)
                        }

                    }}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-5">
                <Input
                label="Contact Number"
                    value={props.contact}
                    type="text"
                    onChange={e=>{
                        if(e.target.value.length<=11){
                            props.setErrors('Number must be 11 digits')
                            props.setContact(e.target.value)
                        }else{
                            props.setErrors('')
                            props.setContact(e.target.value)
                        }

                    }}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-5">
                <Select onChange={e=>props.setGender(e)}  name='gender' label="Select Gender">
                    <Option defaultValue value='male'>Male</Option>
                    <Option value='female'>Female</Option>
                </Select>
            </div>
            <div className="mb-5">
                <Input
                label="Birthdate"
                    min="1900-01-01"
                    value={props.birthdate}
                    type="date"
                    onChange={e=>{
                        if(e.target.value.length<=7){
                            props.setBirthdate(e.target.value)
                        }else{
                            props.setBirthdate(e.target.value)
                        }

                    }}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            {props.name!='' && props.birthdate!=''?
            <div className="flex gap-10">
                    <Radio
                    color='green'
                    className="p-0 m-0"
                    id="html" name="type"
                    label="I Agree for this"
                    checked={isValidState}
                    onChange={e=>signalParent(e.target.checked)}
                    />
             </div>
             :
             <div className="flex gap-10 relative">
                    <label htmlFor="" className='bg-red-700 py-2 px-11 opacity-0 absolute top-[5px] z-10 cursor-pointer'
                    onClick={e=>{
                        props.setErrors('Please fill up all Fields')
                    }}
                    >label</label>
                    <div className="flex gap-10 relative">
                    <Radio
                        color='green'
                        className="p-0 m-0"
                        id="html" name="type"
                        label="I Agree for this"
                        disabled
                        />
                    </div>
             </div>
             }
    </div>
    </div>
    </div>
  )
}
