

import { Form, useActionData, useLoaderData, Link } from "react-router-dom";
import axiosClient from "../../../axios-client"
import { Avatar } from "@material-tailwind/react";

export const fruitsLoader = async () => {
    try {
      const { data } = await axiosClient.get('admin/meat')
      console.log(data)
      return data.data;
    } catch (error) {
      return error;
    };
  };

  export const AdminDeleteMeatAction = async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("fruitId");

    return Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: 'Delete',
        }).then((result) => {
        if (result.isConfirmed) {
           return axiosClient.delete(`admin/meat/delete/${id}`).then(({data})=>{
            console.log(data)
                return toast.fire({
                    title: 'Deleted!',
                    text: data,
                    icon: 'error',
                    confirmButtonText: 'Delete'
                }).then(({data})=>{
                    return {error:'successful deleted'}
                })
           })
        } else{
            return Swal.fire('Changes are not saved', '', 'info')
        }
        })
  };


export default function AdminIndexMeat (){
    const data = useLoaderData()
    const fruits = data.data

    const actionMessage =  useActionData()

    return(
        <div className="flex flex-col">
            <div className="my-5">
            <Link to="create" className="m-5  p-3 text-white hover:bg-green-600 bg-green-500">Add Vagetable</Link>
            </div>
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        {actionMessage && actionMessage.error && <p className="m-3 text-uppercase font-bold text-red-700">{actionMessage.error}</p>}
                        <table className="min-w-full divide-y divide-gray-500">
                            <thead className="bg-red-500">
                                <tr>
                                <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            image
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Name
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Description
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-xs font-bold text-left text-gray-500 uppercase">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {fruits && fruits.map((fruit)=>(
                                <tr key={fruit.id}>
                                     <td className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        <Avatar  src={fruit.image} alt="avatar" size="lg" />
                                    </td>
                                    <td className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {fruit.name}
                                    </td>
                                    <td style={{ whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'200px' }} className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {fruit.description}
                                    </td>
                                    <td className="px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        <Form method="delete" replace className="flex gap-3">
                                            <input name="fruitId" defaultValue={fruit.id} hidden />
                                            <Link className="py-2 px-2 bg-blue-700 text-white rounded-md" to={fruit.name+'/'+fruit.id.toString()}>Edit</Link>
                                            <button className="py-2 px-2 bg-red-700 text-white rounded-md" type="submit">Delete</button>
                                        </Form>
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
