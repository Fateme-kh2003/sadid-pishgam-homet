import { Link, NavLink } from "react-router";
import type { DropdownLink } from "../../Types/nav";

const navLinkClass = (isActive: boolean, extra = "") =>
  `rounded-xl transition ${extra} ${
    isActive
      ? "bg-secondary text-primary"
      : "hover:bg-secondary hover:text-primary"
  }`;

const DropdownMenu = ({ label, path, items }: DropdownLink) => {
  return (
    <div className="group relative">
      <NavLink to={path} className={({ isActive }) => navLinkClass(isActive, "inline-block p-2")}>
        {label}
      </NavLink>
      <div className="invisible absolute right-0 top-full mt-2 w-64 rounded-2xl bg-primary/80 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link key={item.path} to={item.path} className="block rounded-xl px-4 py-3 text-white transition hover:bg-secondary hover:text-primary">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;