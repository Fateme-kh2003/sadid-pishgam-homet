import { Link, NavLink } from "react-router"
import { Search, X , Menu} from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import DropdownMenu from "../Ui/DropdownMenu"; 
import SearchBox from "../Ui/SearchBox";
import type { ServiceItem, ProjectDetail } from "../../Types/content";
import { getServicesRequest } from "../../services/servicesService";
import { getProjectsRequest } from "../../services/projectService";
import type { DropdownLink } from "../../Types/nav";
import type {SearchResult} from "../../Types/content"
    
const navLinkClass = (isActive: boolean, extra = "") =>`rounded-xl transition ${extra} ${isActive? "bg-secondary text-primary": "hover:bg-secondary hover:text-primary"}`;

const Header = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([getServicesRequest(), getProjectsRequest()])
      .then(([fetchedServices, fetchedProjects]) => {
        setServices(fetchedServices);
        setProjects(fetchedProjects);
      })
      .catch((error) => {
        console.error("خطا در دریافت اطلاعات هدر:", error);
      });
  }, []);

  const dropdowns: DropdownLink[] = [
  { label: "محصولات و خدمات", path: "/services",items: services.map((service) => ({ label: service.title, path: `/services#${service.id}`,}))},
  { label: "پروژه ها", path: "/projects", items: projects.map((project) => ({ label: project.title, path: `/projects#${project.id}`,}))},
  ];

  const searchResults: SearchResult[] = [
    ...services.map((service) => ({ 
      id: service.id, 
      label: service.title,
      path: `/services#${service.id}`, 
      type: "service" as const, 
    })), 
  ...projects.map((project) => ({ 
    id: project.id, 
    label: project.title, 
    path: `/projects#${project.id}`, 
    type: "project" as const, 
  })), 
  ].filter((item) => 
    item.label.toLowerCase().includes(searchQuery.trim().toLowerCase()) ); 

  const handleSearchResultClick = () => { 
    setSearchQuery(""); 
    setIsSearchOpen(false); 
    setIsMenuOpen(false); 
  };

  return (
    <header className="fixed top-6 md:top-4  left-1/2 w-[calc(100%-2rem)] md:w-auto  -translate-x-1/2 z-50 rounded-3xl bg-primary/80 px-5 py-2 backdrop-blur-md md:px-8">
      <div className="flex h-9 items-center justify-between">
        <Link to="/" className="text-white text-4xl font-semibold">Hoomat</Link>
        <div className="hidden md:flex items-center text-white gap-3 mr-3">
          {dropdowns.map((dropdown) => (
            <DropdownMenu key={dropdown.path} {...dropdown} />
          ))}
          <NavLink to="/about" className={({ isActive }) => navLinkClass(isActive, "p-2")} >
            درباره ما
          </NavLink>
          <div className="relative">
            <Button onClick={() => setIsSearchOpen((prev) => !prev)}  className="rounded-xl pt-3 p-2 text-white transition hover:bg-secondary hover:text-primary">
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </Button>
            {isSearchOpen && (
              <SearchBox 
               searchQuery={searchQuery} 
               searchResults={searchResults} 
               onSearchChange={setSearchQuery} 
               onResultClick={handleSearchResultClick} 
              />
            )}
          </div>
        </div>
        <Button onClick={() => setIsMenuOpen((prev) => !prev)} className="rounded-xl p-2 text-white transition hover:bg-secondary hover:text-primary md:hidden">
          {isMenuOpen ? <X size={28}/>: <Menu size={28}/>}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/20 mt-3 py-2 md:hidden flex flex-col gap-2">
          {dropdowns.map((dropdown) => (
            <div key={dropdown.path}>
              <Button onClick={() => setOpenDropdown( openDropdown === dropdown.label ? null : dropdown.label )} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-white transition hover:bg-secondary hover:text-primary">
                <span>{dropdown.label}</span>
                <span>
                  {openDropdown === dropdown.label ? "▲" : "▼"}
                </span>
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
          <SearchBox 
           searchQuery={searchQuery} 
           searchResults={searchResults} 
           onSearchChange={setSearchQuery} 
           onResultClick={handleSearchResultClick} 
           mobile 
          />
        </div>
      )}
    </header>
  )
}

export default Header