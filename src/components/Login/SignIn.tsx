import Button from "../Ui/Button"

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";

const fields = [
  { label: "نام کاربری", type: "text", placeholder: "نام کاربری خود را وارد کنید" },
  { label: "رمز عبور", type: "password", placeholder: "رمز عبور خود را وارد کنید" },
];

const SignIn = () => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold text-primary">Hoomat</h1>
        <p className="mt-3 text-lg text-gray-600">ورود به پنل مدیریت</p>
      </div>
      <form className="space-y-4">
        {fields.map((field) => (
          <div key={field.label}>
            <label className="mb-2 block text-sm font-medium text-gray-700">{field.label}</label>
            <input type={field.type} placeholder={field.placeholder} className={inputClass} />
          </div>
        ))}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="h-4 w-4 accent-secondary" />
          <label htmlFor="remember" className="text-sm text-gray-600">مرا به خاطر بسپار</label>
        </div>
        <Button type="submit" className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:bg-secondary hover:text-primary">
          ورود
        </Button>
      </form>
    </div>
  )
}

export default SignIn