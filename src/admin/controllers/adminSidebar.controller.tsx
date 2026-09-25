const ACTIVE_LINK_CLASSES =
    "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold bg-brand-800 text-white shadow-sm transition-colors group";
const INACTIVE_LINK_CLASSES =
    "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 transition-colors group";
const ACTIVE_ICON_CLASSES = "w-5 h-5 text-brand-200";
const INACTIVE_ICON_CLASSES =
    "w-5 h-5 text-slate-400 group-hover:text-slate-200";

export function getSidebarLinkClasses(isActive: boolean): string {
    return isActive ? ACTIVE_LINK_CLASSES : INACTIVE_LINK_CLASSES;
}

export function getSidebarIconClasses(isActive: boolean): string {
    return isActive ? ACTIVE_ICON_CLASSES : INACTIVE_ICON_CLASSES;
}
