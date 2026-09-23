// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { AdminPanel } from "./admin/adminPanel";
import { Login } from "./login/login";
import { createBrowserRouter } from "react-router";

const App = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true, 
                element: <Login/>,
            },
            {
                path: "admin_panel",
                element: <AdminPanel/>
            }
        ],
    },
]);

export default App;
