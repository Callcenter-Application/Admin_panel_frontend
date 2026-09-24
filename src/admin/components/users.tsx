export const UsersSection = () => {
    return (
        <main className="flex-1 w-full p-6 mx-auto space-y-6 md:p-8 max-w-7xl"><!-- Page Header with Title and Primary CTA -->
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-headline-xl font-headline-xl font-bold text-on-surface tracking-tight leading-tight text-[32px]">Usuarios</h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant mt-1.5">Gestiona los usuarios que tienen acceso a la plataforma.</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary-container text-on-primary rounded-lg font-semibold text-headline-sm hover:bg-primary transition-colors shadow-sm active:scale-[0.98]" type="button">
                <span className="material-symbols-outlined text-[24px]" data-icon="person_add">person_add</span>
                <span className="">+ Crear usuario</span>
            </button>
            </div>

            <!-- Toolbar Card (Search, Dropdown Filters, Record Counter) -->
            <section className="p-4 border rounded-lg shadow-sm bg-surface-container-lowest border-outline-variant/70">
            <div className="flex flex-col gap-4 p-2 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center flex-1 gap-4">
                <div className="relative min-w-[280px] max-w-md flex-1">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[24px]" data-icon="search">search</span>
                    </span>
                    <input className="w-full py-3 pr-4 transition-all border rounded-lg pl-11 bg-surface-container-lowest border-outline-variant text-body-lg font-body-lg placeholder:text-outline focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-on-surface" placeholder="Buscar usuario..." type="text">
                </div>
                <div className="relative min-w-47.5">
                    <select className="w-full py-3 pl-4 pr-10 border rounded-lg appearance-none cursor-pointer bg-surface-container-lowest border-outline-variant text-body-lg font-body-lg text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20">
                    <option value="">Todos los roles</option>
                    <option value="Operador">Operador</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Administrador">Administrador</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[24px]" data-icon="arrow_drop_down">arrow_drop_down</span>
                    </span>
                </div>
                <div className="relative min-w-40">
                    <select className="w-full py-3 pl-4 pr-10 border rounded-lg appearance-none cursor-pointer bg-surface-container-lowest border-outline-variant text-body-lg font-body-lg text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20">
                    <option value="">Estado</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[24px]" data-icon="arrow_drop_down">arrow_drop_down</span>
                    </span>
                </div>
                </div>
                <div className="flex items-center gap-2.5 text-headline-sm font-headline-sm text-on-surface-variant bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant/40 self-start lg:self-auto">
                <span className="material-symbols-outlined text-[22px] text-outline" data-icon="group">group</span>
                <span className="">3 usuarios registrados</span>
                </div>
            </div>
            </section>

            <!-- Users Table Card -->
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
                    <!-- Juan Pérez -->
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
                    <!-- María López -->
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
                    <!-- Carlos Gómez -->
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
            <!-- Pagination footer -->
            <div className="flex flex-col gap-4 px-6 py-4 border-t bg-surface-container-lowest border-outline-variant/60 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-body-lg font-body-lg text-on-surface-variant">
                Mostrando <span className="font-semibold text-on-surface">1-3</span> de <span className="font-semibold text-on-surface">3</span> usuarios
                </div>
                <div className="inline-flex items-center gap-2">
                <button className="p-2.5 rounded-lg border border-outline-variant/50 text-outline opacity-40 cursor-not-allowed" disabled="" type="button">
                    <span className="material-symbols-outlined text-[22px]" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="flex items-center justify-center font-semibold rounded-lg shadow-sm w-11 h-11 bg-primary-container text-on-primary font-headline-sm text-headline-sm" type="button">1</button>
                <button className="p-2.5 rounded-lg border border-outline-variant/50 text-outline opacity-40 cursor-not-allowed" disabled="" type="button">
                    <span className="material-symbols-outlined text-[22px]" data-icon="chevron_right">chevron_right</span>
                </button>
                </div>
            </div>
        </section>
        </main>
    )
}