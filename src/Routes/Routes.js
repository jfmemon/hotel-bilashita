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
            }
        ]
    }
]);