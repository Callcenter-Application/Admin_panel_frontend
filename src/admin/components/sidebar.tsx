import { NavLink } from "react-router";
import {
    getSidebarLinkClasses,
    getSidebarIconClasses,
} from "../controllers/adminSidebar.controller";
import { ADMIN_PATHS } from "../admin.routes";

export const SidebarSection = () => {
    return (
        <aside
            className="z-30 flex flex-col w-64 transition-all border-r duration-50 bg-slate-900 text-slate-300 shrink-0 border-slate-800"
            data-purpose="main-sidebar"
        >
            <div className="flex items-center h-16 gap-3 px-6 border-b border-slate-800/80">
                <div className="flex items-center justify-center text-white rounded-lg shadow-md h-9 w-9 bg-brand-800 shadow-brand-900/40">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                        <path d="M19 19v1a2 2 0 0 1-2 2H9"></path>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-base font-bold leading-none tracking-tight text-white">
                        CallBook
                    </span>
                    <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                        Cliente Management
                    </span>
                </div>
            </div>

            <nav
                aria-label="Menú principal"
                className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto"
            >
                <NavLink
                    to={ADMIN_PATHS.dashboard}
                    className={({ isActive }) =>
                        getSidebarLinkClasses(isActive)
                    }
                >
                    {({ isActive }) => (
                        <>
                            <svg
                                className={getSidebarIconClasses(isActive)}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    height="9"
                                    rx="1"
                                    width="7"
                                    x="3"
                                    y="3"
                                ></rect>
                                <rect
                                    height="5"
                                    rx="1"
                                    width="7"
                                    x="14"
                                    y="3"
                                ></rect>
                                <rect
                                    height="9"
                                    rx="1"
                                    width="7"
                                    x="14"
                                    y="12"
                                ></rect>
                                <rect
                                    height="5"
                                    rx="1"
                                    width="7"
                                    x="3"
                                    y="16"
                                ></rect>
                            </svg>
                            <span className="">Dashboard</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to={ADMIN_PATHS.usuarios}
                    className={({ isActive }) =>
                        getSidebarLinkClasses(isActive)
                    }
                >
                    {({ isActive }) => (
                        <>
                            <svg
                                className={getSidebarIconClasses(isActive)}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <span className="">Usuarios</span>
                        </>
                    )}
                </NavLink>

                <a
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 transition-colors group"
                    href="#"
                >
                    <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-slate-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="">Operaciones</span>
                </a>

                <a
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 transition-colors group"
                    href="#"
                >
                    <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-slate-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="">Reportes</span>
                </a>

                <NavLink
                    to={ADMIN_PATHS.configuracion}
                    className={({ isActive }) =>
                        getSidebarLinkClasses(isActive)
                    }
                >
                    {({ isActive }) => (
                        <>
                            <svg
                                className={getSidebarIconClasses(isActive)}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <span className="">Configuración</span>
                        </>
                    )}
                </NavLink>
            </nav>

            <div className="p-4 border-t border-slate-800 bg-slate-950/40">
                <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0 gap-3">
                        <div className="flex items-center justify-center text-sm font-semibold text-white border rounded-full h-9 w-9 bg-brand-800 border-brand-600 shrink-0">
                            LR
                        </div>
                        <div className="truncate">
                            <p className="text-sm font-semibold leading-tight text-white truncate">
                                Luis Reyes
                            </p>
                            <p className="text-xs truncate text-slate-400">
                                Administrador
                            </p>
                        </div>
                    </div>
                    <button
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
                        title="Cerrar sesión"
                        type="button"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </aside>
    );
};
