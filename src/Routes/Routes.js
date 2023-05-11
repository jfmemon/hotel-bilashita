import RoomPackage from "../Pages/RoomPackage/RoomPackage";
import PrivateRoute from "./PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");
const { default: Register } = require("../Pages/Register/Register");
const { default: Login } = require("../Pages/Login/Login");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/register',
                element: <Register></Register>            
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/packages/:id',
                loader: async({params}) => {
                    return fetch(`http://localhost:5000/packages/${params.id}`)
                },
                element: <PrivateRoute><RoomPackage></RoomPackage></PrivateRoute>
            },
            {
                path:'/signOut',
                element:<Home></Home>
            }
        ]
    }
]);