export const HeaderSection = () => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between z-20 shrink-0" data-purpose="top-bar">
            <div className="flex items-center gap-6">
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
            
                <button aria-label="Notificaciones" className="relative p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors" type="button">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                </button>
            
                <div className="h-6 w-px bg-slate-200"></div>
            
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-brand-800 flex items-center justify-center text-white text-xs font-semibold ring-2 ring-brand-100">LR</div>
                    <span className="text-sm font-semibold text-slate-700 hidden sm:inline-block">Luis</span>
                </div>
            </div>
        </header>
    )
}
