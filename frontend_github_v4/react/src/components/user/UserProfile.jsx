
import { useLoaderData } from "react-router-dom";
import axiosClient from "../../axios-client"


export const UserRecordLoader = async() => {
    try {
        const { data } = await axiosClient.get('user/record')
        return data;
      } catch (error) {
        return error;
      };
}


export default function UserProfile (){

    const datas = useLoaderData()

    console.log(datas)

    return(
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle items-start flex gap-5">
                    <div className="overflow-hidden border rounded-lg flex-1">
                        <div className="m-3 uppercase font-bold text-lg">Body Mass Index (BMI)</div>
                        <table className="min-w-full divide-y divide-gray-500">
                            <thead className="bg-red-500">
                                <tr>
                                <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Age
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Weight
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Height
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Result
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Date Created
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {datas.bmi && datas.bmi.map((data)=>(
                                <tr key={data.id}>
                                    <td className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.age}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.weight}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.height}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.result}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {
                                          new Date(data.created_at).toLocaleDateString("en-GB", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                         })}
                                    </td>
                                </tr>
                                   ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="overflow-hidden border rounded-lg flex-1">
                        <div className="m-3 uppercase font-bold text-lg">Fat Burner Calories(FBC)</div>
                        <table className="min-w-full divide-y divide-gray-500">
                            <thead className="bg-red-500">
                                <tr>
                                <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Gender
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Weight
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Waist
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Result
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Date Created
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {datas.fat && datas.fat.map((data)=>(
                                <tr key={data.id}>
                                    <td className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.gender}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.weight}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.waist}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {data.result}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {
                                          new Date(data.created_at).toLocaleDateString("en-GB", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                         })}
                                    </td>
                                </tr>
                                   ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>)

}
