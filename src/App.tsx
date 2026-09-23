// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { Login } from "./login/login";
import { createBrowserRouter } from "react-router";

// 1. Define your routes using an array of objects
const App = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true, // Matches the base path '/'
                element: <Login />,
            },
        ],
    },
]);

export default App;
