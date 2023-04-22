

import {Outlet} from "react-router-dom";
import axiosClient from "../../../axios-client"

export const AdminFruitLoader = async () => {
    try {
      const { data } = await axiosClient.get('admin/fruit')
      return data;
    } catch (error) {
      return error;
    };
  };

export default function AdminFruit (){
    return <Outlet/>
}
