import { Navigate } from "react-router";
import type { RouteObject } from "react-router";
import { AdminPanel } from "./adminPanel";
import { DashboardSection } from "./components/dashboard";
import { UsersSection } from "./components/users";
import { UserCreationSection } from "./components/userCreation";
import { ConfigurationSection } from "./components/configuration";

export const ADMIN_PANEL_PATH = "/admin_panel";

export const ADMIN_PATHS = {
    dashboard: `${ADMIN_PANEL_PATH}/dashboard`,
    usuarios: `${ADMIN_PANEL_PATH}/usuarios`,
    crearUsuario: `${ADMIN_PANEL_PATH}/usuarios/crear_usuario`,
    configuracion: `${ADMIN_PANEL_PATH}/configuracion`,
};

export const adminRoutes: RouteObject = {
    path: "admin_panel",
    element: <AdminPanel />,
    children: [
        {
            index: true,
            element: <Navigate to="dashboard" replace />,
        },
        {
            path: "dashboard",
            element: <DashboardSection />,
        },
        {
            path: "usuarios",
            element: <UsersSection />,
            children: [
                {
                    path: "crear_usuario",
                    element: <UserCreationSection />,
                },
            ],
        },
        {
            path: "configuracion",
            element: <ConfigurationSection />,
        },
    ],
};
