import { useLocation } from "react-router";
import { h1Content } from "../admin.controller";

export const HeaderSection = () => {
    const { pathname } = useLocation();

    return (
        <header
            className="z-20 flex items-center justify-between h-16 px-6 border-b shrink-0 border-slate-200/80 bg-white/95 backdrop-blur-sm sm:px-8"
            data-purpose="top-bar"
        >
            {/* Breadcrumb / Page title */}
            <div className="flex items-center min-w-0 gap-3">
                <h1 className="text-lg font-bold tracking-tight truncate text-slate-800 sm:text-xl">
                    Panel de administrador
                </h1>

                <span className="text-sm font-medium text-slate-300">
                    /
                </span>

                <p className="text-sm font-medium truncate text-slate-500 sm:text-base">
                    {h1Content(pathname)}
                </p>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-3 shrink-0">
                {/* Notifications */}
                <button
                    type="button"
                    aria-label="Notificaciones"
                    className="relative flex items-center justify-center w-10 h-10 transition-all duration-200 group rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                >
                    <svg
                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-105"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Notification indicator */}
                    <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
                        <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-primary-container opacity-60" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-primary-container ring-2 ring-white" />
                    </span>
                </button>

                {/* Divider */}
                <div className="w-px h-8 mx-1 bg-slate-200" />

                {/* User */}
                <button
                    type="button"
                    className="
                        group flex items-center gap-3 rounded-xl
                        px-2 py-1.5
                        transition-colors duration-200
                        hover:bg-slate-50
                        focus:outline-none focus:ring-2
                        focus:ring-primary-container/30
                    "
                >
                    {/* Avatar */}
                    <div
                        className="flex items-center justify-center text-sm font-bold transition-transform duration-200 rounded-full shadow-sm h-9 w-9 bg-primary-container text-on-primary ring-2 ring-white group-hover:scale-105"
                    >
                        LR
                    </div>

                    {/* User information */}
                    <div className="hidden text-left md:block">
                        <p className="text-sm font-semibold leading-tight text-slate-800">
                            Luis Reyes
                        </p>
                        <p className="mt-0.5 text-xs font-medium text-slate-400">
                            Administrador
                        </p>
                    </div>

                    {/* Chevron */}
                    <svg
                        className="hidden w-4 h-4 text-slate-400 md:block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="m6 9 6 6 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};
