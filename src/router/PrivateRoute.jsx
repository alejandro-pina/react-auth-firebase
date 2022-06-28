import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../config/routes/paths";
import Loading from "../components/Loading/Loading";
import useAuthContext from "../hook/useAuthContext";

const PrivateRoute = () => {
    const { userAuth,user } = useAuthContext()
    if(!userAuth)
    {
        return <Navigate to={HOME}/>
    }
    if(!user || user.email === undefined)
    {
        return <Loading/>
    }
    return  <Outlet/>  
}
export default PrivateRoute;