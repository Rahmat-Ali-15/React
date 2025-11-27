import { useContext } from "react"
import { MyContext } from "../Context/ContextComponent"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {isLogin} = useContext(MyContext);
    console.log("🚀 ~ isLogin:", isLogin);
    if(!isLogin){
        return <Navigate to="/auth" />
    }
    return children
}