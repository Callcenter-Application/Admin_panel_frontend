import type { RoleOption, UserRole } from "../dto/admin.dto";

export const DEFAULT_ROLE: UserRole = 2;

export const ROLE_OPTIONS: RoleOption[] = [
    {
        id: 1,
        name: "Operador",
        description:
            "Acceso a las funciones necesarias para atender y gestionar llamadas.",
        icon: "headset",
        footerIcon: "call",
        footerLabel: "Cola telefónica en vivo",
    },
    {
        id: 2,
        name: "Supervisor",
        description:
            "Acceso a herramientas de supervisión y gestión de operadores.",
        icon: "badge",
        footerIcon: "monitoring",
        footerLabel: "Monitoreo + Métricas",
    },
    {
        id: 3,
        name: "Administrador",
        description: "Acceso a las funciones administrativas de la plataforma.",
        icon: "shield",
        footerIcon: "admin_panel_settings",
        footerLabel: "Control global total",
    },
];

export function getRoleName(roleId: UserRole): string {
    return ROLE_OPTIONS.find((role) => role.id === roleId)?.name ?? "";
}
