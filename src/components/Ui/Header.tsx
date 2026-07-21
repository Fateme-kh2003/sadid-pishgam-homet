import Button from "./Button"

const Header = () => {
  return (
    <header className={"fixed top-4 left-1/2 -translate-x-1/2 z-50"}>
      <div className={"flex justify-between h-12 w-190 items-center rounded-3xl bg-primary/80 px-8 backdrop-blur-md"}>
        <span className={"text-white text-4xl font-semibold"}>Hoomat</span>
        <div className={"flex text-white gap-4 text-base "}>
          <Button className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>محصولات و خدمات</Button>
          <Button className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>پروژه ها</Button>
          <Button className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>درباره ما</Button>
          <Button className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>تماس با ما</Button>
          <Button className={"hover:bg-secondary p-2 hover:rounded-xl hover:cursor-pointer"}>ورود/ثبت نام</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
