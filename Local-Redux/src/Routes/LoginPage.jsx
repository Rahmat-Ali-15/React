import { useDispatch, useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../Redux/Auth/action";
import { Login } from "../Components/Login";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state)=>{
        return state.auth.isAuth;
    });
    console.log("🚀 ~ isAuth:", isAuth);

    const handleLogin = ({email, pass})=> {
        if(email === "admin" && pass === "admin"){
            dispatch ({type: LOGIN_SUCCESS, payload: "fakeToken"});
        }
        else{
            dispatch({type: LOGIN_FAILURE, payload: "wrong credentials"});
        }
    };

    if(isAuth){
        return <Navigate to="/" />;
    }

    return(
        <>
            <Login handleLogin={handleLogin} />
        </>
    )
}