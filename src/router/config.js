import Home from "../views/Home/Home";
import Seller from '../views/Home/seller/Seller'
export default [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home",
                redirect:"/home/seller"
            },
            {
                path:"/home/seller",
                component:Seller
            }
        ]
    }
]