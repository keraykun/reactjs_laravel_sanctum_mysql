import { useState } from "react"
import { Link } from "react-router-dom"
import { useLoaderData, Form } from "react-router-dom"
import axiosClient from "../../../axios-client"

export const EditProductLoader = async({params}) =>{
    const {id} = params
    try {
       return axiosClient.get('admin/product/edit/'+id).
        then(({data})=>{
            return data
        })
    } catch (error) {
        console.log(error)
    }
}


export const UpdateProductLoader = async({ request }) =>{
    const formData = await request.formData();
    const payload = {
        id:formData.get('productID'),
        product:formData.get('product'),
        price:formData.get('price'),
        quantity:formData.get('quantity'),
    }
    return await axiosClient.put('admin/product/update/'+payload.id,payload).
        then(({data})=>{
            console.log(data)
            return toast.fire({
                title: 'Updated!',
                text: data,
                icon: 'success',
                confirmButtonText: 'Delete'
            })
        }).catch(error=>{
            console.log('error')
        console.log(error)
        })
}

export default function EditProduct (){

    const data = useLoaderData()

    const [product,setProduct] = useState(data.name)
    const [price,setPrice] = useState(data.price)
    const [quantity,setQuantity] = useState(data.quantity)


    return(
        <div className="w-full max-w-xs">
            <Form method="post" replace className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Product
                </label>
                <input value={product || ''} name="product" onChange={(e)=>setProduct(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Username"/>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Price
                </label>
                <input  value={price || ''} name="price" onChange={(e)=>setPrice(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Price"/>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Quantity
                </label>
                <input  value={quantity || ''} name="quantity" onChange={(e)=>setQuantity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Quantity"/>
                </div>

                <div className="flex items-center justify-between">
                <input name="productID" defaultValue={data.id} hidden />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                   Update
                </button>
                <Link to="/admin/product" className="btn-default">Back</Link>
                </div>
            </Form>
        </div>
    )
}


