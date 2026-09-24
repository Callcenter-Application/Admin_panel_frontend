export const HeaderSection = () => {
    return (
        <header className="z-20 flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 sm:px-8 shrink-0" data-purpose="top-bar">
            <div className="flex items-center gap-6">
                <h1 className="text-xl font-bold tracking-tight text-slate-800">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
            
                <button aria-label="Notificaciones" className="relative p-2 transition-colors rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100" type="button">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary-container"></span>
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-primary-container"></span>
                    </span>
                </button>
            
                <div className="w-px h-6 bg-slate-200"></div>
            
                <div className="flex items-center gap-2.5 pl-1 cursor-pointer">
                    <div className="flex items-center justify-center font-bold rounded-full shadow-sm w-9 h-9 bg-primary-container text-on-primary text-body-md">LR</div>
                    <span className="hidden font-semibold text-body-lg text-on-surface md:inline">Luis Reyes</span>
                </div>
            </div>
        </header>
    )
}
