const Header = () => {
  return (
    <header className={"fixed bg-primary h-18 w-full "}>
      <div className={"flex justify-between items-center pr-8 h-full"}>
        <span className={"text-white text-4xl"}>Hoomat</span>
        <div className={"flex text-white gap-6 pr-18 text-base "}>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>محصولات و خدمات</span>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>پروژه ها</span>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>درباره ما</span>
          <span className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>تماس با ما</span>
        </div>
        <div className={"pl-2  text-white"}>
          <button className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>ورود/ثبت نام</button>
          <input type="text" className={"border-white rounded-xl bg-gray-800 p-1 hover:cursor-pointer mr-2 focus:bg-gray-600"} placeholder="جستجو..."/>
        </div>
      </div>
    </header>
  )
}

export default Header
