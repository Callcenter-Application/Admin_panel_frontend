export const DashboardSection = () => {
    return (
        <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto sm:px-8" data-purpose="dashboard-viewport">
            {/* BEGIN: ContentHeader */}
            <section className="flex flex-col justify-between gap-4 md:flex-row md:items-center" data-purpose="content-greeting">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Buenos días, Luis</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Resumen general de la plataforma</p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Estado en tiempo real del Gateway */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Gateway Operativo 99.99%
                    </span>
                    <span className="hidden text-xs text-slate-400 sm:inline">| Actualizado: hace 30s</span>
                </div>
            </section>
            {/* END: ContentHeader */}

            {/* BEGIN: MetricCards (Fila de 4 según wireframe: 128 Usuarios, 116 Activos, 12 Inactivos, 84 Online) */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-purpose="kpi-metric-cards">
                {/* Card 1: 128 Usuarios */}
                <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200/90 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Usuarios</span>
                        <div className="p-2 rounded-lg bg-blue-50 text-brand-800">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-3xl font-bold tracking-tight text-slate-900">128</span>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+4 este mes</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">Total de cuentas registradas</p>
                </div>
                {/* Card 2: 116 Activos */}
                <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200/90 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Activos</span>
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-3xl font-bold tracking-tight text-slate-900">116</span>
                        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">En servicio</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">90.6% de disponibilidad global</p>
                </div>
                {/* Card 3: 12 Inactivos */}
                <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200/90 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Inactivos</span>
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-3xl font-bold tracking-tight text-slate-900">12</span>
                        <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">Pausados/Baja</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">Licencias suspendidas temporalmente</p>
                </div>
                {/* Card 4: 84 Online */}
                <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200/90 hover:shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Online</span>
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-3xl font-bold tracking-tight text-emerald-600">84</span>
                        <span className="text-xs font-semibold text-slate-500">Conectados ahora</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">En cola telefónica y atención activa</p>
                </div>
            </section>
            {/* END: MetricCards */}

            {/* BEGIN: MidSection (2 columnas: Usuarios por rol y Acciones rápidas) */}
            <section className="grid grid-cols-1 gap-6 lg:grid-cols-12" data-purpose="middle-cards-grid">
                {/* Columna Izquierda: Tarjeta "Usuarios por rol" (7 cols) */}
                <div className="p-6 bg-white border shadow-sm lg:col-span-7 rounded-xl border-slate-200/90">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h3 className="text-base font-bold text-slate-900">Usuarios por rol</h3>
                            <p className="text-xs text-slate-500">Distribución de perfiles autorizados en el sistema</p>
                        </div>
                        <span className="text-xs font-semibold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-md">Total: 128</span>
                    </div>
                    {/* Contenedor Visual de Gráfico & Estadísticas */}
                    <div className="flex flex-col items-center gap-6 pt-2 sm:flex-row">
                        {/* Gráfico Donut SVG con CSS nativo */}
                        <div className="relative flex items-center justify-center shrink-0 w-36 h-36">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                {/* Círculo base fondo */}
                                <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4.5"></path>
                                {/* Operadores 72% (#1e40af / brand-800) */}
                                <path className="text-brand-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="72, 100" strokeLinecap="round" strokeWidth="4.5"></path>
                                {/* Supervisores 19% (#38bdf8 / sky-400) offset 72 */}
                                <path className="text-sky-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="19, 100" strokeDashoffset="-72" strokeLinecap="round" strokeWidth="4.5"></path>
                                {/* Administradores 9% (#64748b / slate-500) offset 91 */}
                                <path className="text-slate-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="9, 100" strokeDashoffset="-91" strokeLinecap="round" strokeWidth="4.5"></path>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold leading-none text-slate-900">128</span>
                                <span className="text-[10px] uppercase font-semibold text-slate-400 mt-0.5">Usuarios</span>
                            </div>
                        </div>
                        {/* Leyenda y barras detalladas */}
                        <div className="flex-1 w-full space-y-3">
                            {/* Operadores */}
                            <div>
                                <div className="flex justify-between mb-1 text-xs font-medium">
                                    <span className="flex items-center gap-2 text-slate-700">
                                        <span className="w-2.5 h-2.5 rounded-full bg-brand-800"></span> Operadores
                                    </span>
                                    <span className="font-semibold text-slate-900">92 <span className="font-normal text-slate-400">(72%)</span></span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5">
                                    <div className="bg-brand-800 h-1.5 rounded-full" style={{ width: "72%" }}></div>
                                </div>
                            </div>
                            {/* Supervisores */}
                            <div>
                                <div className="flex justify-between mb-1 text-xs font-medium">
                                    <span className="flex items-center gap-2 text-slate-700">
                                        <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Supervisores
                                    </span>
                                    <span className="font-semibold text-slate-900">24 <span className="font-normal text-slate-400">(19%)</span></span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5">
                                    <div className="bg-sky-500 h-1.5 rounded-full" style={{ width: "19%" }}></div>
                                </div>
                            </div>
                            {/* Administradores */}
                            <div>
                                <div className="flex justify-between mb-1 text-xs font-medium">
                                    <span className="flex items-center gap-2 text-slate-700">
                                        <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span> Administradores
                                    </span>
                                    <span className="font-semibold text-slate-900">12 <span className="font-normal text-slate-400">(9%)</span></span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5">
                                    <div className="bg-slate-400 h-1.5 rounded-full" style={{ width: "9%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Columna Derecha: Tarjeta "Acciones rápidas" (5 cols) */}
                <div className="flex flex-col justify-between p-6 bg-white border shadow-sm lg:col-span-5 rounded-xl border-slate-200/90">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-bold text-slate-900">Acciones rápidas</h3>
                            <span className="text-xs text-slate-400">Atajos frecuentes</span>
                        </div>
                        {/* Acciones secundarias en lista limpia */}
                        <div className="mt-4 space-y-2">
                            <button className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition text-left" type="button">
                                <span className="flex items-center gap-2.5">
                                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Ver reporte de llamadas
                                </span>
                                <span className="text-slate-400">›</span>
                            </button>
                            <button className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition text-left" type="button">
                                <span className="flex items-center gap-2.5">
                                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Gestionar colas telefónicas
                                </span>
                                <span className="text-slate-400">›</span>
                            </button>
                            <button className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition text-left" type="button">
                                <span className="flex items-center gap-2.5">
                                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.25V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Exportar métricas (CSV/PDF)
                                </span>
                                <span className="text-slate-400">›</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-4 text-xs border-t border-slate-100 text-slate-400">
                        <span className="">Soporte técnico 24/7</span>
                        <span className="font-medium cursor-pointer text-brand-800 hover:underline">Ext. 4004</span>
                    </div>
                </div>
            </section>
            {/* END: MidSection */}

            {/* BEGIN: RecentUsersTable (Sección inferior según wireframe) */}
            <section className="overflow-hidden bg-white border shadow-sm rounded-xl border-slate-200/90" data-purpose="recent-users-table">
                {/* Encabezado de la tabla */}
                <div className="flex flex-col justify-between gap-3 px-6 py-4 border-b border-slate-100 sm:flex-row sm:items-center">
                    <div>
                        <h3 className="text-base font-bold text-slate-900">Usuarios recientes</h3>
                        <p className="text-xs text-slate-500">Últimos registros y actividad de miembros en la plataforma</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">Mostrando 5 de 128</span>
                        <button className="px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-50 rounded-lg border border-brand-200 transition" type="button">
                            Ver todos
                        </button>
                    </div>
                </div>
                {/* Tabla con columnas del wireframe: Nombre | Email | Rol | Fecha | Acción */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/75 border-b border-slate-200 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                                <th className="px-6 py-3" scope="col">Nombre</th>
                                <th className="px-6 py-3" scope="col">Email</th>
                                <th className="px-6 py-3" scope="col">Rol</th>
                                <th className="px-6 py-3" scope="col">Fecha</th>
                                <th className="px-6 py-3 text-right" scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-slate-100">
                            {/* Fila 1: Ana Morales */}
                            <tr className="transition-colors hover:bg-slate-50/70">
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold bg-blue-100 border border-blue-200 rounded-full text-brand-800">
                                            AM
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">Ana Morales</div>
                                            <div className="text-[11px] text-slate-400">ID: #OP-8821</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-slate-600 text-xs">
                                    ana.morales@callcenter.com
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-brand-800 border border-blue-100">
                                        Operador
                                    </span>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-xs text-slate-500">
                                    Hoy, 08:45 AM
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 text-slate-400 hover:text-brand-800 hover:bg-slate-100 rounded-md transition" title="Editar usuario" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition" title="Más opciones" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Fila 2: Carlos Gómez */}
                            <tr className="transition-colors hover:bg-slate-50/70">
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold border rounded-full bg-sky-100 text-sky-800 border-sky-200">
                                            CG
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">Carlos Gómez</div>
                                            <div className="text-[11px] text-slate-400">ID: #SP-3104</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-slate-600 text-xs">
                                    carlos.gomez@callcenter.com
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200">
                                        Supervisor
                                    </span>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-xs text-slate-500">
                                    Ayer, 18:20 PM
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 text-slate-400 hover:text-brand-800 hover:bg-slate-100 rounded-md transition" title="Editar usuario" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition" title="Más opciones" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Fila 3: Elena Ruiz */}
                            <tr className="transition-colors hover:bg-slate-50/70">
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold bg-blue-100 border border-blue-200 rounded-full text-brand-800">
                                            ER
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">Elena Ruiz</div>
                                            <div className="text-[11px] text-slate-400">ID: #OP-9012</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-slate-600 text-xs">
                                    elena.ruiz@callcenter.com
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-brand-800 border border-blue-100">
                                        Operador
                                    </span>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-xs text-slate-500">
                                    14 Oct, 11:15 AM
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 text-slate-400 hover:text-brand-800 hover:bg-slate-100 rounded-md transition" title="Editar usuario" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition" title="Más opciones" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Fila 4: David Ramos */}
                            <tr className="transition-colors hover:bg-slate-50/70">
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold border rounded-full bg-slate-200 text-slate-800 border-slate-300">
                                            DR
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">David Ramos</div>
                                            <div className="text-[11px] text-slate-400">ID: #AD-1003</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-slate-600 text-xs">
                                    david.ramos@callcenter.com
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                                        Administrador
                                    </span>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-xs text-slate-500">
                                    12 Oct, 09:30 AM
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 text-slate-400 hover:text-brand-800 hover:bg-slate-100 rounded-md transition" title="Editar usuario" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition" title="Más opciones" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Fila 5: Laura Méndez */}
                            <tr className="transition-colors hover:bg-slate-50/70">
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold bg-blue-100 border border-blue-200 rounded-full text-brand-800">
                                            LM
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">Laura Méndez</div>
                                            <div className="text-[11px] text-slate-400">ID: #OP-8840</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-slate-600 text-xs">
                                    laura.mendez@callcenter.com
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-brand-800 border border-blue-100">
                                        Operador
                                    </span>
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-xs text-slate-500">
                                    11 Oct, 16:40 PM
                                </td>
                                <td className="py-3.5 px-6 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 text-slate-400 hover:text-brand-800 hover:bg-slate-100 rounded-md transition" title="Editar usuario" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition" title="Más opciones" type="button">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Paginación / Footer de la tabla */}
                <div className="flex items-center justify-between px-6 py-3 text-xs border-t bg-slate-50/50 border-slate-100 text-slate-500">
                    <span className="">Página 1 de 26</span>
                    <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-400 cursor-not-allowed" disabled>Anterior</button>
                        <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">Siguiente</button>
                    </div>
                </div>
            </section>
            {/* END: RecentUsersTable */}
        </div>
    );
};
