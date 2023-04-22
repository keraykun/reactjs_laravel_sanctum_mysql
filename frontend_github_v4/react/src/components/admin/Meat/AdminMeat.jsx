

import {Outlet} from "react-router-dom";
import axiosClient from "../../../axios-client"

export const AdminMeatLoader = async () => {
    try {
      const { data } = await axiosClient.get('admin/meat')
      return data;
    } catch (error) {
      return error;
    };
  };


export default function AdminMeat (){
    return <Outlet/>
}
