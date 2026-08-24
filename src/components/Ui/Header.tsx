import { Link } from "react-router"

const Header = () => {
  return (
    <header className={"fixed top-4 left-1/2 -translate-x-1/2 z-50"}>
      <div className={"flex justify-between h-12 w-190 items-center rounded-3xl bg-primary/80 px-8 backdrop-blur-md"}>
        <Link to="/" className={"text-white text-4xl font-semibold"}>Hoomat</Link>
        <div className={"flex text-white gap-4 text-base "}>
          <Link to="/services" className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>محصولات و خدمات</Link>
          <Link to="/projects" className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>پروژه ها</Link>
          <Link to="/about" className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>درباره ما</Link>
          <Link to="/contact" className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>تماس با ما</Link>
          <Link to="/services" className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>ورود/ثبت نام</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
