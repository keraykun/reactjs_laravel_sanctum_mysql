
import { useState } from "react";
import { useStateContext } from "../../../../context/useContextProvider";
import axiosClient from "../../../../../axios-client";
import {
    Typography,
    Card,
    Input,
    Button,
    Radio
  } from "@material-tailwind/react";


export default function BMIIndex(){

    const {role,setRole,token} = useStateContext()

    const [age,setAge] = useState(0);
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [result,setResult] = useState(null);

    const [message,setMessage] = useState('');

    const onhandlerCalculate = (e) =>{
        e.preventDefault();
        if(age==0 || weight==0 || height==0){
            setMessage('Please Fill up all fields')
        }else{
            const bmi = (weight/(height*height)*703)
            setMessage("Your BMI result is "+bmi.toFixed(1))
            setResult(bmi.toFixed(1))
            document.getElementById('btn-reset').style.display='inline'
            document.getElementById('btn-record').style.display='inline'
        }
    }

    const onhandlerReset = (e) =>{
        e.preventDefault();
        setMessage("")
        document.getElementById("formCalculate").reset();
        e.target.style.display='none'
        document.getElementById('btn-record').style.display='none'
    }

    function onHandlerAdd (ev){
        ev.preventDefault()
        const payload = {
          age:age,
          weight:weight,
          height:height,
          result:result
        }

        axiosClient.post('/user/bmi-calculator',payload).
            then(({data})=>{
                document.getElementById("formCalculate").reset();
                return toast.fire({
                    title: 'Created!',
                    text: data,
                    position: 'top-center',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
            }).
            catch(error=>{
                if(error.code==='ERR_NETWORK'){
                    window.location.replace("/connection")
                }
            })
      }

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>What Is Body Mass Index (BMI) and What Does It Measure?</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700 block" style={{ background:'rgb(240 253 244)' }}>
                        <h1>
                        Body Mass Index (BMI) is a dated, biased measure that doesn’t account for several factors, such as body composition, ethnicity, race, gender, and age.

                            Despite being a flawed measure, BMI is widely used today in the medical community because it is an inexpensive and quick method for analyzing potential health status and outcomes.
                        </h1>
                      </div>
                </div>

                <div className="flex gap-5">
                    <div className="flex flex-row gap-5 p-5 text-lg shadow-lg flex-wrap w-full items-stretch justify-center">
                        <div className="w-full block" >
                            <h1>
                            Body mass index (BMI) is a calculation that is sometimes used in healthcare settings as an indirect method to determine a person's body weight category. This BMI calculator can help you learn what this measurement means and how it relates to your health and fitness.
                            </h1>
                            <h1 className="text-2xl my-5 font-bold">
                            What Does BMI Measure?
                            </h1>
                            <p>
                            BMI is a measurement that takes into account your height, and weight to produce a calculation. This calculation is a measurement of your body size and can be used to determine how your body weight is related to your height. It is a method of determining whether you may be underweight, average weight, overweight, or obese, but it has flaws.
                            BMI is not a diagnostic tool nor is it a measurement of body fat percentage. A high BMI may or may not be an indicator of high body fat, but it doesn't necessarily mean that a person is overweight or obese and it alone is not a direct indicator of health.
                            In some populations, BMI has been found to be a fairly reliable indicator of body fat measures. But the calculation is less effective in other groups, such as bodybuilders and older adults. There are other methods that are more accurate in estimating body fat.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5 p-5 text-lg shadow-lg flex-wrap w-full items-stretch justify-center">
                     <Card color="transparent" shadow={false}>
                        <Typography color="gray" className="mt-1  font-bold text-lg">
                        Learn Your Body Mass Index (BMI)
                        </Typography>
                        <div className="text-bold my-3 text-red-600 w-full">
                        {message}
                        </div>
                        <form id="formCalculate" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="flex gap-10">
                            <Radio className="p-0 m-0" id="html" name="type" label="Male" />
                            <Radio  className="p-0 m-0" id="react" name="type" label="Female" defaultChecked />
                            </div>
                            <div className="mb-4 flex flex-col gap-6">
                            <Input type="number" onChange={(e)=>setAge(e.target.value)} size="lg" label="Age" />
                            <Input type="number" onChange={(e)=>setWeight(e.target.value)} size="lg" label="Weight (lbs)" />
                            <Input type="number" onChange={(e)=>setHeight(e.target.value)} size="lg" label="Height (in)" />
                            </div>
                            <Button onClick={onhandlerCalculate} className="mt-6" fullWidth>
                            Calculate
                            </Button>
                            <Button onClick={onhandlerReset} id="btn-reset" className="hidden mt-6 bg-white text-black shadow-md" fullWidth>
                            Reset
                            </Button>
                            {token?
                             <Button onClick={onHandlerAdd} id="btn-record" className="hidden mt-6 bg-green-300 text-white shadow-md" fullWidth>Add to record</Button>
                            :
                            <></>
                            }
                        </form>
                        </Card>
                    </div>
                </div>
             </div>
        </div>)
}
