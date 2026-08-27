import { Link, NavLink } from "react-router"
import { Search, X , Menu} from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navLinks = [
        { path: "/about", label: "درباره ما" },
        { path: "/contact", label: "تماس با ما" },
      ];

    const dropdownLinks = [
      {title:"محصولات و خدمات",path:"/services",items:[
        { title: "پنل خورشیدی", path: "/services#solar" },
        { title: "دوربین مداربسته", path: "/services#camera" },
        { title: "سیستم ذخیره انرژی", path: "/services#storage" },
        { title: "نصب و پشتیبانی", path: "/services#support" },]},
      {title:"پروژه ها",path:"/projects",items:[
        { title: "پروژه های پنل خورشیدی", path: "/projects#solar-projects" },
        { title: "پروژه های دوربین مداربسته", path: "/projects#camera-projects" },
        { title: "پروژه های سیستم امنیتی", path: "/projects#security-projects" },]}
    ]    

  return (
    <header className="fixed top-6 md:top-4  left-1/2 w-[calc(100%-2rem)] md:w-auto  -translate-x-1/2 z-50">
      <div className="rounded-3xl bg-primary/80 px-5 py-2 backdrop-blur-md md:px-8">
        <div className="flex h-9 items-center justify-between">
          <Link to="/" className="text-white text-4xl font-semibold">Hoomat</Link>
          <div className="hidden md:flex items-center text-white gap-6 text-base mr-3">
          {dropdownLinks.map((dropdown) => (
            <div key={dropdown.title} className="group relative">
              <NavLink to={dropdown.path} className={({ isActive })=> `inline-block rounded-xl p-2 transition ${isActive ? "bg-secondary text-primary": "hover:bg-secondary hover:text-primary"}`} >
                {dropdown.title}
              </NavLink>

              <div className="invisible absolute right-0 top-full mt-2 w-52 rounded-2xl bg-primary/80 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {dropdown.items.map((item) => (
                <a key={item.path} href={item.path} className="block rounded-xl px-4 py-3 text-white transition hover:bg-secondary">
                  {item.title}
                </a>
                ))}
              </div>
            </div>
            ))}
          {navLinks.map((link)=>{
            return(
              <NavLink key={link.path} to={link.path} className={({ isActive })=> `rounded-xl p-2 transition ${isActive ? "bg-secondary text-primary": "hover:bg-secondary hover:text-primary"}`} >
                <span>{link.label}</span>
              </NavLink>
            )
          })}
          <div className="relative">
            <Button onClick={() => setIsSearchOpen(!isSearchOpen)}  className="rounded-xl pt-3 p-2 text-white transition hover:bg-secondary hover:text-primary">
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </Button>

            {isSearchOpen && (
              <div className="absolute left-0 top-full mt-2">
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-56 rounded-xl border-0 bg-white px-4 py-3 text-primary outline-none shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-xl p-2 text-white transition hover:bg-secondary hover:text-primary md:hidden">
          {isMenuOpen ? <X size={28}/>: <Menu size={28}/>}
        </Button>
        </div>
        {isMenuOpen && (
          <div className="border-t border-white/20 mt-3 py-2 md:hidden">
            <div className="flex flex-col gap-2">
              {dropdownLinks.map((dropdown) => (
                <div key={dropdown.title}>

                <button onClick={() =>setOpenDropdown( openDropdown === dropdown.title ? null : dropdown.title)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-white transition hover:bg-secondary hover:text-primary">
                  <span>{dropdown.title}</span>
                  <span>{openDropdown === dropdown.title ? "▲" : "▼"}</span>
                </button>

                {openDropdown === dropdown.title && (
                  <div className="mr-4 border-r border-white/20 pr-2">
                    {dropdown.items.map((item) => (
                      <a key={item.path} href={item.path} onClick={() => { setIsMenuOpen(false); setOpenDropdown(null);}}
                        className="block rounded-xl px-4 py-2 text-sm text-gray-200 transition hover:bg-secondary hover:text-primary">
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
                </div>
              ))}
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>`rounded-xl px-4 py-3 transition ${isActive
                        ? "bg-secondary text-primary"
                        : "text-white hover:bg-secondary hover:text-primary"}`}>
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <Search size={20} className="text-white" />
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-full rounded-xl border-0 bg-white px-4 py-2 text-primary outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
