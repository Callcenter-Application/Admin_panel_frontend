import { ADMIN_PATHS } from "../admin.routes";

export function h1Content(pathname: string): string {
    if (pathname === ADMIN_PATHS.crearUsuario) {
        return "Usuarios ➔ Crear usuario";
    } else if (pathname === ADMIN_PATHS.usuarios) {
        return "Usuarios";
    } else if (pathname === ADMIN_PATHS.dashboard) {
        return "Dashboard";
    } else if (pathname === ADMIN_PATHS.configuracion) {
        return "Configuración";
    } else {
        return "Panel de Administración";
    }
}
