import { Link, NavLink } from "react-router"
import { Search, X , Menu} from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import type {DropdownLink } from "../../Types"

const dropdownLinks: DropdownLink[] = [
  {label:"محصولات و خدمات",path:"/services",items:[
    { label: "پنل خورشیدی", path: "/services#solar" },
    { label: "دوربین مداربسته", path: "/services#camera" },
    { label: "سیستم ذخیره انرژی", path: "/services#storage" },
    { label: "نصب و پشتیبانی", path: "/services#support" },]},
  {label:"پروژه ها",path:"/projects",items:[
    { label: "پروژه های پنل خورشیدی", path: "/projects#solar-projects" },
    { label: "پروژه های دوربین مداربسته", path: "/projects#camera-projects" },
    { label: "پروژه های سیستم امنیتی", path: "/projects#security-projects" },]}
  ]
    
const navLinkClass = (isActive: boolean, extra = "") =>
  `rounded-xl transition ${extra} ${
    isActive
      ? "bg-secondary text-primary"
      : "hover:bg-secondary hover:text-primary"
  }`;

const searchInputBaseClass ="rounded-xl border-0 bg-white px-4 py-3 text-primary outline-none";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-6 md:top-4  left-1/2 w-[calc(100%-2rem)] md:w-auto  -translate-x-1/2 z-50 rounded-3xl bg-primary/80 px-5 py-2 backdrop-blur-md md:px-8">
      <div className="flex h-9 items-center justify-between">
        <Link to="/" className="text-white text-4xl font-semibold">Hoomat</Link>
        <div className="hidden md:flex items-center text-white gap-3 mr-3">
          {dropdownLinks.map((dropdown) => (
            <div key={dropdown.label} className="group relative">
              <NavLink to={dropdown.path} className={({ isActive }) => navLinkClass(isActive, "inline-block p-2")} >
                {dropdown.label}
              </NavLink>
              <div className="invisible absolute right-0 top-full mt-2 w-52 rounded-2xl bg-primary/80 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {dropdown.items.map((item) => (
                <Link key={item.path} to={item.path} className="block rounded-xl px-4 py-3 text-white transition hover:bg-secondary">
                  {item.label}
                </Link>
                ))}
              </div>
            </div>
          ))}
          <NavLink to="/about" className={({ isActive }) => navLinkClass(isActive, "p-2")} >
                درباره ما
          </NavLink>
          <div className="relative">
            <Button onClick={() => setIsSearchOpen((prev) => !prev)}  className="rounded-xl pt-3 p-2 text-white transition hover:bg-secondary hover:text-primary">
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </Button>
            {isSearchOpen && (
              <input type="text" placeholder="جستجو..." className={`${searchInputBaseClass} w-56 shadow-lg absolute left-0 top-full mt-3`}/>
            )}
          </div>
        </div>
        <Button onClick={() => setIsMenuOpen((prev) => !prev)} className="rounded-xl p-2 text-white transition hover:bg-secondary hover:text-primary md:hidden">
          {isMenuOpen ? <X size={28}/>: <Menu size={28}/>}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/20 mt-3 py-2 md:hidden flex flex-col gap-2">
          {dropdownLinks.map((dropdown) => (
            <div key={dropdown.label}>
              <Button onClick={() =>setOpenDropdown( openDropdown === dropdown.label ? null : dropdown.label)} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-white transition hover:bg-secondary hover:text-primary">
                <span>{dropdown.label}</span>
                <span>{openDropdown === dropdown.label ? "▲" : "▼"}</span>
              </Button>
              {openDropdown === dropdown.label && (
                <div className="mr-4 border-r border-white/20 pr-2">
                  {dropdown.items.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => { setIsMenuOpen(false); setOpenDropdown(null);}} className="block rounded-xl px-4 py-2 text-sm text-gray-200 transition hover:bg-secondary hover:text-primary">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => navLinkClass(isActive, "px-4 py-3 text-white")}>
            درباره ما
          </NavLink>
          <div className="mt-2 flex items-center gap-2">
            <Search size={20} className="text-white" />
            <input type="text" placeholder="جستجو..." className={`${searchInputBaseClass} w-full py-2`}/>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header