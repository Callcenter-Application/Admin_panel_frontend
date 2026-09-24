import { Outlet } from "react-router";
import { HeaderSection } from "./components/header";
import { SidebarSection } from "./components/sidebar";

export const AdminPanel = () => {
    return (
        <div className="flex h-full overflow-hidden antialiased text-slate-800 selection:bg-brand-100 selection:text-brand-900">
            <SidebarSection/>
            <div className="flex flex-col flex-1 h-full overflow-hidden">
                <HeaderSection />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
