
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function UserAccess({role}){
    const navigate = useNavigate
    switch (role) {
        case 'admin':
            return <Navigate to="/admin/dashboard"/>
        case 'user':
            return <Navigate to="/user/dashboard"/>
        default:
            return <Navigate to="/" />
    }
}
export default UserAccess
