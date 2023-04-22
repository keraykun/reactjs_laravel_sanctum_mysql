

import { Form, useActionData, useLoaderData, Link } from "react-router-dom";
import axiosClient from "../../../axios-client"

export const productsLoader = async () => {
    try {
      const { data } = await axiosClient.get('admin/product')
      return data.data;
    } catch (error) {
      return error;
    };
  };

  export const deleteProductAction = async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("productId");
    return Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: 'Delete',
        }).then((result) => {
        if (result.isConfirmed) {
           return axiosClient.delete(`admin/product/delete/${id}`).then(({data})=>{
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


export default function Product (){
    const products = useLoaderData()

    const actionMessage =  useActionData()

    return(
        <div className="flex flex-col">
            <div className="my-5">
            <Link to="create" className="m-5  p-3 text-white hover:bg-green-600 bg-green-500">Add Product</Link>
            </div>
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        {actionMessage && actionMessage.error && <p>{actionMessage.error}</p>}
                        <table className="min-w-full divide-y divide-gray-500">
                            <thead className="bg-red-500">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            id
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Product
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                            Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {products && products.map((product)=>(
                                <tr key={product.id}>
                                     <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {product.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {product.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {product.price}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                          {product.quantity}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        <Form method="delete" replace>
                                            <input name="productId" defaultValue={product.id} hidden />
                                            <Link className="btn-edit mr-3" to={product.id.toString()}>Link me</Link>
                                            <button className="btn-delete" type="submit">Delete</button>
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
