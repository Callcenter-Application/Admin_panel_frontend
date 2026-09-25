import { Link, useOutlet } from "react-router";
import { ADMIN_PATHS } from "../admin.routes";

export const UsersSection = () => {
    const outlet = useOutlet();
    if (outlet) {
        return outlet;
    }

    return (
        <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto sm:px-8" data-purpose="users-viewport">
            {/* Page Header with Title and Primary CTA */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 className="text-xl font-bold text-on-surface tracking-tight leading-tight text-[32px]">Usuarios</h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant mt-1.5">Gestiona los usuarios que tienen acceso a la plataforma.</p>
            </div>
            <Link to={ADMIN_PATHS.crearUsuario} className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary-container text-on-primary rounded-lg font-semibold text-headline-sm hover:bg-primary transition-colors shadow-sm active:scale-[0.98]">
                <span className="material-symbols-outlined text-[24px]" data-icon="person_add">person_add</span>
                <span className="">Crear usuario</span>
            </Link>
            </div>

            {/* Toolbar Card (Search, Dropdown Filters, Record Counter) */}
            <section className="p-4 border rounded-lg shadow-sm bg-surface-container-lowest border-outline-variant/70">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Search & Filters */}
                    <div className="flex flex-col flex-1 gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        {/* Search */}
                        <div className="relative w-full sm:min-w-70 sm:max-w-md sm:flex-1">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                <span
                                    className="material-symbols-outlined text-[22px]"
                                    data-icon="search"
                                >
                                    search
                                </span>
                            </span>

                            <input
                                type="text"
                                placeholder="Buscar usuario..."
                                className="w-full pr-4 text-sm font-medium transition-all duration-200 bg-white border shadow-sm outline-none h-11 rounded-xl border-slate-200 pl-11 text-slate-700 placeholder:text-slate-400 hover:border-slate-300 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                            />
                        </div>

                        {/* Role Filter */}
                        <div className="relative w-full sm:w-48">
                            <select
                                className="w-full px-4 pr-10 text-sm font-medium transition-all duration-200 bg-white border shadow-sm outline-none appearance-none cursor-pointer bg-none h-11 rounded-xl border-slate-200 text-slate-700 hover:border-slate-300 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                                defaultValue=""
                            >
                                <option value="">Todos los roles</option>
                                <option value="Operador">Operador</option>
                                <option value="Supervisor">Supervisor</option>
                                <option value="Administrador">Administrador</option>
                            </select>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                <span
                                    className="material-symbols-outlined text-[21px]"
                                    data-icon="arrow_drop_down"
                                >
                                    expand_more
                                </span>
                            </span>
                        </div>

                        {/* Status Filter */}
                        <div className="relative w-full sm:w-40">
                            <select
                                className="w-full px-4 pr-10 text-sm font-medium transition-all duration-200 bg-white border shadow-sm outline-none appearance-none cursor-pointer bg-none h-11 rounded-xl border-slate-200 text-slate-700 hover:border-slate-300 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                                defaultValue=""
                            >
                                <option value="">Estado</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                <span
                                    className="material-symbols-outlined text-[21px]"
                                    data-icon="arrow_drop_down"
                                >
                                    expand_more
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Registered users */}
                    <div
                        className="
                            flex w-fit items-center gap-3
                            rounded-xl
                            border border-slate-200/80
                            bg-slate-50/70
                            px-4 py-2.5
                        "
                    >
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm text-slate-500">
                            <span
                                className="material-symbols-outlined text-[20px]"
                                data-icon="group"
                            >
                                group
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-slate-400">
                                Usuarios registrados
                            </span>
                            <span className="text-sm font-bold text-slate-700">
                                3 usuarios
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Users Table Card */}
            <section className="overflow-hidden border rounded-lg shadow-sm bg-surface-container-lowest border-outline-variant/70">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="tracking-wider uppercase border-b bg-surface-container-low/60 border-outline-variant/80 text-label-lg font-label-lg text-outline">
                    <th className="px-6 py-4 font-semibold" scope="col">Nombre</th>
                    <th className="px-6 py-4 font-semibold" scope="col">Correo electrónico</th>
                    <th className="px-6 py-4 font-semibold" scope="col">Rol</th>
                    <th className="px-6 py-4 font-semibold" scope="col">Estado</th>
                    <th className="px-6 py-4 font-semibold text-right" scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/40">
                    {/* Juan Pérez */}
                    <tr className="transition-colors hover:bg-surface-container-low/40">
                    <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center gap-3.5">
                        <div className="flex items-center justify-center font-semibold rounded-full shadow-sm w-11 h-11 bg-primary-fixed text-on-primary-fixed font-headline-sm text-headline-sm">JP</div>
                        <div>
                            <div className="font-semibold text-on-surface text-headline-sm">Juan Pérez</div>
                            <div className="text-body-md font-body-md text-outline md:hidden">juan.perez@empresa.com</div>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-5 font-medium whitespace-nowrap text-on-surface-variant text-body-lg">juan.perez@empresa.com</td>
                    <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label-lg font-label-lg bg-primary-container text-on-primary font-semibold">Administrador</span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-label-lg font-label-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#059669]"></span>Activo
                        </span>
                    </td>
                    <td className="px-6 py-5 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-primary hover:bg-surface-container" title="Ver detalles" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="visibility">visibility</span>
                        </button>
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-primary hover:bg-surface-container" title="Editar" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="edit">edit</span>
                        </button>
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-on-surface hover:bg-surface-container" title="Más opciones" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="more_vert">more_vert</span>
                        </button>
                        </div>
                    </td>
                    </tr>
                    {/* María López */}
                    <tr className="transition-colors hover:bg-surface-container-low/40">
                    <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center gap-3.5">
                        <div className="flex items-center justify-center font-semibold rounded-full shadow-sm w-11 h-11 bg-secondary-fixed text-on-secondary-fixed font-headline-sm text-headline-sm">ML</div>
                        <div>
                            <div className="font-semibold text-on-surface text-headline-sm">María López</div>
                            <div className="text-body-md font-body-md text-outline md:hidden">maria.lopez@empresa.com</div>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-5 font-medium whitespace-nowrap text-on-surface-variant text-body-lg">maria.lopez@empresa.com</td>
                    <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label-lg font-label-lg bg-surface-container-highest text-secondary font-semibold">Operador</span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-label-lg font-label-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#059669]"></span>Activo
                        </span>
                    </td>
                    <td className="px-6 py-5 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-primary hover:bg-surface-container" title="Ver detalles" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="visibility">visibility</span>
                        </button>
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-primary hover:bg-surface-container" title="Editar" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="edit">edit</span>
                        </button>
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-on-surface hover:bg-surface-container" title="Más opciones" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="more_vert">more_vert</span>
                        </button>
                        </div>
                    </td>
                    </tr>
                    {/* Carlos Gómez */}
                    <tr className="transition-colors hover:bg-surface-container-low/40">
                    <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center gap-3.5">
                        <div className="flex items-center justify-center font-semibold rounded-full shadow-sm w-11 h-11 bg-surface-container-high text-primary font-headline-sm text-headline-sm">CG</div>
                        <div>
                            <div className="font-semibold text-on-surface text-headline-sm">Carlos Gómez</div>
                            <div className="text-body-md font-body-md text-outline md:hidden">carlos.gomez@empresa.com</div>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-5 font-medium whitespace-nowrap text-on-surface-variant text-body-lg">carlos.gomez@empresa.com</td>
                    <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label-lg font-label-lg bg-secondary-fixed text-on-secondary-fixed-variant font-semibold">Supervisor</span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-label-lg font-label-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#059669]"></span>Activo
                        </span>
                    </td>
                    <td className="px-6 py-5 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-primary hover:bg-surface-container" title="Ver detalles" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="visibility">visibility</span>
                        </button>
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-primary hover:bg-surface-container" title="Editar" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="edit">edit</span>
                        </button>
                        <button className="p-2 transition-colors rounded-lg text-outline hover:text-on-surface hover:bg-surface-container" title="Más opciones" type="button">
                            <span className="material-symbols-outlined text-[24px]" data-icon="more_vert">more_vert</span>
                        </button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            {/* Pagination footer */}
            <div className="flex flex-col gap-4 px-6 py-4 border-t bg-surface-container-lowest border-outline-variant/60 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-body-lg font-body-lg text-on-surface-variant">
                Mostrando <span className="font-semibold text-on-surface">1-3</span> de <span className="font-semibold text-on-surface">3</span> usuarios
                </div>
                <div className="inline-flex items-center gap-2">
                <button className="p-2.5 rounded-lg border border-outline-variant/50 text-outline opacity-40 cursor-not-allowed" disabled type="button">
                    <span className="material-symbols-outlined text-[22px]" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="flex items-center justify-center font-semibold rounded-lg shadow-sm w-11 h-11 bg-primary-container text-on-primary font-headline-sm text-headline-sm" type="button">1</button>
                <button className="p-2.5 rounded-lg border border-outline-variant/50 text-outline opacity-40 cursor-not-allowed" disabled type="button">
                    <span className="material-symbols-outlined text-[22px]" data-icon="chevron_right">chevron_right</span>
                </button>
                </div>
            </div>
        </section>
        </div>
    )
}
