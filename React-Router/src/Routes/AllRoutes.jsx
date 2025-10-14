import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact"
import { Home } from "../Pages/Home"
// import { Login } from "../Pages/Login"
import { NotFoundPage } from "../Pages/NotFoundPage"
import { Route, Routes } from "react-router-dom"

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element = {<Home />} ></Route>
                <Route path="/about" element = {<About />} ></Route>
                <Route path="/contact" element = {<Contact />} ></Route>
                {/* <Route path="/login" element = {<Login />} ></Route> */}
                <Route path= "*" element ={<NotFoundPage />}></Route>
            </Routes>
        </>
    )
}