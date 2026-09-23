import { HeaderSection } from "./components/header";
import { SidebarSection } from "./components/sidebar";

export const AdminPanel = () => {
    return (
        <body className="h-full flex overflow-hidden text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-900">
            <SidebarSection/>
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <HeaderSection />
                <main className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6" data-purpose="dashboard-viewport"></main>
            </div>
        </body>
    );
};
