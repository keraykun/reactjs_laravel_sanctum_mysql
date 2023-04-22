import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/useContextProvider";

function Protectedlayout(){
    const {token} = useStateContext()
    return token? <Outlet/> : <Navigate to="/login" />;
}
export default Protectedlayout
