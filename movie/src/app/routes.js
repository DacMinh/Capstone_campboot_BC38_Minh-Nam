import Signin from "../features/auth/Signin";
import Signup from "../features/auth/Signup";
import Detail from "../features/booking/Detail";
import Home from "../features/booking/Home";
import Seats from "../features/booking/Seats";

const routers = [ 
    {path: "/", componet:Home},
    {path: "/detail", componet:Detail},
    {path: "/seats", componet:Seats},
    {path: "/signin", componet:Signin},
    {path: "/signup", componet:Signup},
];