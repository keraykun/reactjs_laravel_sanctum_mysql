

import {Outlet} from "react-router-dom";
import axiosClient from "../../../axios-client"

export const AdminVagetableLoader = async () => {
    try {
      const { data } = await axiosClient.get('admin/vagetable')
      return data;
    } catch (error) {
      return error;
    };
  };


export default function AdminVagetable (){
    return <Outlet/>
}
