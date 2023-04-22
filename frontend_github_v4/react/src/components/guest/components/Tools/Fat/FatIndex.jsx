
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


export default function FatIndex(){
    const {role,setRole,token} = useStateContext()
    const [gender,setGender] = useState('');
    const [weight,setWeight] = useState(0);
    const [waist,setWaist] = useState(0);
    const [message,setMessage] = useState('');
    const [result,setResult] = useState(null);

    const onhandlerCalculate = (e) =>{
        e.preventDefault();
        if(weight==0 || waist==0 || gender==''){
            setMessage('Please Fill up all fields')
        }else{
             const totalWeight = (weight * 1.082) + 94.42
             const totalWaist = totalWeight-(waist * 4.15)
             const bmi = ((weight - totalWaist) * 100) / weight
             const finalBMI = Number((bmi).toFixed())
             setResult(finalBMI)
             document.getElementById('btn-reset').style.display='inline'
             document.getElementById('btn-record').style.display='inline'
                if(finalBMI<6){
                    setMessage("Your Body fat result is "+finalBMI+" % You fall into Essential Fat ")
                }else if(finalBMI<14){
                    setMessage("Your Body fat result is "+finalBMI+" % You fall into Athlete ")
                }else if(finalBMI<18){
                    setMessage("Your Body fat result is "+finalBMI+" % You fall into Fitness ")
                }else if(finalBMI<24){
                    setMessage("Your Body fat result is "+finalBMI+" % You fall into Acceptable")
                }else if(finalBMI>25){
                    setMessage("Your Body fat result is "+finalBMI+" % You fall into Obese ")
                }
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
          gender:gender,
          weight:weight,
          waist:waist,
          result:result
        }

        axiosClient.post('/user/bmi-fatburner',payload).
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
                <div className="text-3xl text-green-900 font-bold"><h1>How to Calculate Body Fat Percentage</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700 block" style={{ background:'rgb(240 253 244)' }}>
                        <h1>
                        There are different ways to calculate your body fat percentage. Some methods require special equipment or access to expert services. These methods are recognized as being the most accurate.
                        You can also estimate body fat percentage at home. A body fat calculator is the easiest method because it requires no special tools or lengthy appointments with a specialist.
                        This method will give you a body fat percent estimate that you can confirm with other methods if you choose. You'll need a basic tape measure and about five minutes to gather all the data you need to get an instant body fat measurement.
                        </h1>
                      </div>
                </div>

                <div className="flex gap-5">
                    <div className="flex flex-row gap-5 p-5 text-lg shadow-lg flex-wrap w-full items-stretch justify-center">
                        <div className="w-full block" >
                            <h1 className="text-2xl my-5 font-bold">
                            ⁣How to Use the Body Fat Calculator
                            </h1>
                            <p>
                            There are a few best practices to keep in mind when figuring out how body fat is calculated. Follow these guidelines for calculating the most accurate body fat percentage.
                            </p>
                            <h1 className="text-2xl my-5 font-bold">
                            When to Take Measurements
                            </h1>
                            <p>
                            You'll want to take measurements first thing in the morning to get the most accurate result. Your weight can fluctuate throughout the day, so it's smart to get your numbers before you've had anything to eat or drink.
                            </p>
                            <h1 className="text-2xl my-5 font-bold">
                            What to Use
                            </h1>
                            <p>
                            Once you've weighed yourself, you'll need to take body measurements. Use a soft, flexible (cloth or fiberglass) tape measure to gather the numbers. Do not use an elastic tape measure. A measuring tape like what a tailor uses is optimal.
                            </p>
                            <h1 className="text-2xl my-5 font-bold">
                            How to Take Your Measurements
                            </h1>
                            <p>
                            When you measure the circumference of each body part, the tape should feel firm enough against your skin so that it stays in place. However, it should not be so tight that it causes an indentation. You can use either English or metric units.
                            </p>
                            <p>
                            The measurements that need to be taken are slightly different for men and women. Men only measure waist circumference, but women also measure other parts of the body, including hips, wrist, and forearm.
                            </p>
                            <h1 className="text-2xl my-5 font-bold">
                            Links to Disease Risks
                            </h1>
                            <p>
                            It is problematic to assign a strict cut-off for what body fat percentage puts someone at higher risk of health concerns like heart disease, diabetes, and stroke. Body fat percentage as a standalone figure does not account for sex, ethnicity, or age differences.2

There are other measurements that might help you evaluate your risk for conditions like cardiovascular disease. If your body fat is too high according to the calculator, speak to a healthcare provider about different tools that you can use to measure your health risks.

One of the most popular assessment tools is body mass index (BMI). BMI is a number that is used to evaluate your body size. It is not a percentage of body fat but a general score that helps determine if your weight falls into a healthy range.

The number is calculated using your weight and height. If you carry too much weight for your height, the excess weight is assumed to be fat.

Body mass index is simply a tool that puts you into a category based on weight. It is not designed to be an accurate diagnostic tool for determining health.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col flex-row gap-5 p-5 text-lg shadow-lg flex-wrap w-full justify-center items-center">
                     <Card color="transparent" shadow={false}>
                        <Typography color="gray" className="mt-1  font-bold text-lg">
                        Learn Your Body Fat Burner Calculate
                        </Typography>
                        <div className="text-bold my-3 text-red-600 w-full">
                        {message}
                        </div>
                        <form id="formCalculate" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="flex gap-10">
                            <Radio value={gender}  onChange={(e)=>setGender('Male')} className="p-0 m-0" id="html" name="type" label="Male" />
                            <Radio value={gender}  onChange={(e)=>setGender('Female')} className="p-0 m-0" id="react" name="type" label="Female"/>
                            </div>
                            <div className="mb-4 flex flex-col gap-6">
                            <Input type="number" onChange={(e)=>setWeight(e.target.value)} size="lg" label="Weight (lbs)" />
                            <Input type="number" onChange={(e)=>setWaist(e.target.value)} size="lg" label="Waist Circumference (in)" />
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
                        <h1 className="text-2xl my-5 font-bold">
                        Body Fat Percentage Categories
                        </h1>
                        <p>
                        Now that you've got your number, you probably want to know how your body fat percent compares to other men or women in various categories. According to the American Council on Exercise (ACE), there are five different ranges or body fat categories.1 Keep in mind that these categories are based on body fat norms and may not be an indicator of your specific level of fitness or health.
                        </p>
                        <div className="p-1.5 w-full inline-block align-middle p-5">
                    <div className="overflow-hidden border rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-xs font-bold text-left text-gray-500 uppercase border-r border-red-100"
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-xs font-bold text-left text-gray-500 uppercase border-r border-red-100 "
                                    >
                                       Body Fat
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    Essential Fat
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    2-5%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    Athletes
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    6-13%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    Fitness
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    14-17%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    Acceptable
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    18-24%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    Obese
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    {'>25%'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                     </div>

                    </div>
                </div>
             </div>
        </div>)
}
