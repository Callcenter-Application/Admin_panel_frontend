import { Login } from "./login/login";
import { adminRoutes } from "./admin/admin.routes";
import { createBrowserRouter } from "react-router";

const App = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <Login/>
            },
            adminRoutes
        ],
    },
]);

export default App;
