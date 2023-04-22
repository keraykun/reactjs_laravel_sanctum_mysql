import { useState } from "react"
import { Link } from "react-router-dom"
import { Form } from "react-router-dom"
import axiosClient from "../../../axios-client"




export const AddProductLoader = async({ request }) =>{

    const clearForm = () => {
        document.getElementById("clear-form").reset();
    }

    const formData = await request.formData();
    const payload = {
        product:formData.get('product'),
        price:formData.get('price'),
        quantity:formData.get('quantity'),
    }
    return await axiosClient.post('admin/product/create',payload).
        then(({data})=>{
            clearForm()
            return toast.fire({
                title: 'Created!',
                text: data,
                icon: 'success',
                confirmButtonText: 'Delete'
            })
        }).catch(error=>{
            console.log('error')
        console.log(error)
        })
}

export default function AddProduct (){
    const [product,setProduct] = useState('')
    const [price,setPrice] = useState('')
    const [quantity,setQuantity] = useState('')

    return(
        <div className="w-full max-w-xs">
            <Form  id="clear-form" method="post" replace className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Product
                </label>
                <input name="product" value={product} onChange={(e)=>setProduct(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Username"/>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Price
                </label>
                <input name="price" value={price} onChange={(e)=>setPrice(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Price"/>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Quantity
                </label>
                <input  name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Quantity"/>
                </div>

                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                   Create
                </button>
                <Link to="/admin/product" className="btn-default">Back</Link>
                </div>
            </Form>
        </div>
    )
}


