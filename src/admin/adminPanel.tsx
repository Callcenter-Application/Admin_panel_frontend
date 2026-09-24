import { HeaderSection } from "./components/header";
import { SidebarSection } from "./components/sidebar";
import { DashboardSection } from "./components/dashboard";

export const AdminPanel = () => {
    return (
        <div className="flex h-full overflow-hidden antialiased text-slate-800 selection:bg-brand-100 selection:text-brand-900">
            <SidebarSection/>
            <div className="flex flex-col flex-1 h-full overflow-hidden">
                <HeaderSection />
                <main className="flex-1 px-6 py-6 space-y-6 overflow-y-auto sm:px-8" data-purpose="dashboard-viewport">
                    <DashboardSection />
                </main>
            </div>
        </div>
    );
};
