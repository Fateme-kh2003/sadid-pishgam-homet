//SignIn.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Ui/Button"
import { loginRequest } from "../../services/authService";
import toast from "react-hot-toast";
import { SpinnerMini } from "../Ui/Spinner";
import { Eye, EyeOff } from "lucide-react";

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";

const fields = [
  { name: "username", label: "نام کاربری", type: "text", placeholder: "نام کاربری خود را وارد کنید"},
  { name: "password", label: "رمز عبور", type: "password", placeholder: "رمز عبور خود را وارد کنید" },
];

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ADMIN_USERNAME = "amirhossein";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!username.trim() || !password.trim()) {
    toast.error("لطفاً نام کاربری و رمز عبور را وارد کنید.");
    return;
  }
  setIsLoading(true);
  try {
    const { error: loginError } = await loginRequest(password);
    if (loginError || username !== ADMIN_USERNAME) {
      toast.error("نام کاربری یا رمز عبور اشتباه است.");
      return;
    }
    navigate("/admin");
  } catch (error) {
    toast.error("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold text-primary">Hoomat</h1>
        <p className="mt-3 text-lg text-gray-600">ورود به پنل مدیریت</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">نام کاربری</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="نام کاربری خود را وارد کنید"
            className={inputClass}
          />
        </div>
        <div className="relative">
          <label className="mb-2 block text-sm font-medium text-gray-700"> رمز عبور</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور خود را وارد کنید"
            className={inputClass}
          />
          <Button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-11 text-gray-500">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="h-4 w-4 accent-secondary" />
          <label htmlFor="remember" className="text-sm text-gray-600">مرا به خاطر بسپار</label>
        </div>
        {isLoading ? <SpinnerMini/> 
        : 
        <Button type="submit" disabled={isLoading} className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:scale-101 disabled:opacity-60">
         ورود
        </Button> }
      </form>
    </div>
  )
}

export default SignIn