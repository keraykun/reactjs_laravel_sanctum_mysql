

import {Outlet} from "react-router-dom";
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
    return <Outlet/>
}
