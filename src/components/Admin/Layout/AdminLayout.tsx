import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { LayoutDashboard,FolderKanban,Wrench,Users,PanelBottom,KeyRound,ChevronRight,ChevronLeft,House} from "lucide-react";
import Button from "../../Ui/Button";
import type { AdminNavItem } from "../../../Types";

const navItems: AdminNavItem[] = [
  { label: "داشبورد", path: "/admin", icon: LayoutDashboard },
  { label: "صفحه اصلی", path: "/admin/home", icon: House },
  { label: "پروژه‌ها", path: "/admin/projects", icon: FolderKanban },
  { label: "خدمات", path: "/admin/services", icon: Wrench },
  { label: "درباره ما و تیم", path: "/admin/about", icon: Users },
  { label: "فوتر", path: "/admin/footer", icon: PanelBottom },
  { label: "تغییر رمز عبور", path: "/admin/change-password", icon: KeyRound },
];

const navLinkClass = (isActive: boolean) =>
  `flex items-center gap-3 rounded-xl px-3 py-3 transition ${
    isActive ? "bg-secondary text-primary" : "text-gray-200 hover:bg-white/10"
  }`;

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex bg-gray-50">
      <aside className={`sticky top-0 h-screen shrink-0 bg-primary text-white transition-all duration-300 ${isOpen ? "w-42 md:w-64" : "w-16 md:w-20"}`}>
        <div className="flex items-center justify-between px-4 py-5">
          {isOpen && <span className="text-2xl font-bold">Hoomat</span>}
          <Button onClick={() => setIsOpen((prev) => !prev)} className="rounded-lg p-2 transition hover:bg-white/10">
            {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>
        <nav className="flex flex-col gap-1 px-2 md:px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path} end={item.path === "/admin"} className={({ isActive }) => navLinkClass(isActive)}>
                <Icon size={22} className="shrink-0" />
                {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 pt-2 p-6 md:p-10 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;