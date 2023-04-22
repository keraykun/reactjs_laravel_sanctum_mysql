import { useLoaderData } from "react-router-dom";
import axiosClient from "../../axios-client";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";

export const UserHomeLoader = async () => {
    try {
      const { data } = await axiosClient.get('user/dashboard')
      return data;
    } catch (error) {
      return error;
    };
}


export default function UserHome (){

    const data = useLoaderData()

    console.log(data)

    return (
    <div className="max-w-xg flex gap-5">
        <section className="bg-green-500 flex-1 py-3 px-2 flex items-center rounded-md text-white gap-3">
            <MdOutlinePersonalInjury className="text-5xl"/>
            <h1 className="text-2xl ">Type of health <span className="uppercase font-bold">{data.health.name}</span></h1>
        </section>
        <section className="bg-green-500 flex-1 py-3 px-2 flex items-center rounded-md text-white gap-3">
            <GiStairsGoal className="text-5xl"/>
            <h1 className="text-2xl ">Type of Goal <span className="uppercase font-bold">{data.goal.name}</span></h1>
        </section>
    </div>)

}
