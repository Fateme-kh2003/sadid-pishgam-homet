const Header = () => {
  return (
    <header className={"fixed top-4 left-1/2 -translate-x-1/2 z-50"}>
      <div className={"flex justify-between h-12 w-190 items-center rounded-3xl bg-primary/80 px-8 backdrop-blur-md"}>
        <span className={"text-white text-4xl font-semibold"}>Hoomat</span>
        <div className={"flex text-white gap-4 text-base "}>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>محصولات و خدمات</span>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>پروژه ها</span>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>درباره ما</span>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>تماس با ما</span>
          <button className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>ورود/ثبت نام</button>
        </div>
      </div>
    </header>
  )
}

export default Header
