import { useState } from "react";
import Button from "../../components/Ui/Button";
import { changePasswordRequest, loginRequest } from "../../services/authService";
import toast from "react-hot-toast";
import { SpinnerMini } from "../../components/Ui/Spinner";
import { Eye, EyeOff } from "lucide-react";

const inputClass ="w-full rounded-xl border border-gray-200 px-4 py-3 text-right outline-none transition focus:border-secondary";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const fields = [
  { label: "رمز عبور فعلی", value: currentPassword, onChange: setCurrentPassword, showPassword: showCurrentPassword,setShowPassword: setShowCurrentPassword},
  { label: "رمز عبور جدید", value: newPassword, onChange: setNewPassword,showPassword: showNewPassword,setShowPassword: setShowNewPassword},
  { label: "تکرار رمز عبور جدید", value: confirmPassword, onChange: setConfirmPassword, showPassword: showConfirmPassword,setShowPassword: setShowConfirmPassword},
];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      toast.error("لطفاً همه فیلدها را پر کنید.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("رمز عبور جدید و تکرار آن یکسان نیستند.");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("رمز عبور جدید باید حداقل ۶ کاراکتر باشد.");
      return;
    }
    setIsSaving(true);
    try {
      const { error: currentPasswordError } = await loginRequest(currentPassword);
      if (currentPasswordError) {
        toast.error("رمز عبور فعلی اشتباه است.");
        return;
      }
      const { error } = await changePasswordRequest(newPassword);
      if (error) {
        toast.error("تغییر رمز عبور انجام نشد.");
        return;
      }
      toast.success("رمز عبور با موفقیت تغییر کرد.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      toast.error("خطایی رخ داد. دوباره تلاش کنید.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="mt-8 mx-auto max-w-md rounded-3xl bg-white p-6 shadow-md">
      <h1 className="text-xl md:text-3xl font-bold text-primary">تغییر رمز عبور</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {fields.map((field) => (
            <div key={field.label}>
              <label className="mb-2 block text-sm font-medium text-gray-700">{field.label}</label>
              <div className="relative">
                <input
                  type={field.showPassword ? "text" : "password"}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className={`${inputClass} pl-12`}
                />
                <Button type="button" onClick={() => field.setShowPassword((prev) => !prev)} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                {field.showPassword ? (<EyeOff size={20} />) : (<Eye size={20} />)}
              </Button>
              </div>
            </div>
          ))}
          <Button type="submit" disabled={isSaving} className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:scale-105">
           {isSaving ? <SpinnerMini/> : "ذخیره تغییرات"}
          </Button>
        </form>
    </div>
  );
};

export default ChangePassword;